import React, { useState } from "react";
import { TableProps, TableColumn } from "../interface/types";

const DataTable = <T extends { id: number | string }>({
  data,
  columns,
  onSort,
  onSelect,
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const [selectedRows, setSelectedRows] = useState<Set<number | string>>(new Set());

  // Sort data internally if onSort is not provided
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  const handleSort = (key: keyof T) => {
    const direction = sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
    onSort?.(key); // Call the external sorting function, if provided
  };

  const toggleRowSelection = (id: number | string) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) newSelection.delete(id);
    else newSelection.add(id);

    setSelectedRows(newSelection);
    onSelect?.(Array.from(newSelection).map((rowId) => data.find((item) => item.id === rowId)!));
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
      onSelect?.([]);
    } else {
      const allSelected = new Set(data.map((item) => item.id));
      setSelectedRows(allSelected);
      onSelect?.(data);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectedRows.size === data.length}
              onChange={toggleSelectAll}
            />
          </th>
          {columns.map((column) => (
            <th
              key={column.key as string}
              onClick={() => column.sortable && handleSort(column.key)}
              style={{ cursor: column.sortable ? "pointer" : "default" }}
            >
              {column.title}
              {sortConfig?.key === column.key &&
                (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.has(row.id)}
                onChange={() => toggleRowSelection(row.id)}
              />
            </td>
            {columns.map((column) => (
              <td key={`${row.id}-${column.key as string}`}>
                {column.render
                  ? column.render(row[column.key], row)
                  : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
