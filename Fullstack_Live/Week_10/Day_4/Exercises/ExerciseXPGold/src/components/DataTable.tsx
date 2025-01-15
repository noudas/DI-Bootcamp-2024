// Step-by-Step Instructions
// 1. Define Data and Column Interfaces
// Create an interface that represents how a column is defined (e.g., title, key, sortable, etc.).
// Create a second interface for your table’s props (e.g., data, columns, onSort, onSelect).
// Hint: Use TypeScript generics to allow the table to handle any data structure. For example, if your data objects contain fields like firstName or email, the table can still work without changing its internal logic.

// 2. Build a Generic Table Component
// In a new component (e.g., DataTable.tsx), define a generic type parameter <T> that extends a base shape (like { id: number | string }).
// Accept props that include:
// data: T[] (the array of data to display),
// columns: TableColumn<T>[] (the column definitions),
// optional callbacks like onSort or onSelect.
// Hint: The key of each column often corresponds to a property in the data item. Use keyof T in TypeScript to ensure type safety.

// 3. Add Sorting Functionality
// Keep track of the current sorting configuration in state (sortConfig).
// If a column is marked sortable, handle click events on the header to toggle sorting direction.
// Trigger a callback (onSort) if you want the parent to handle the actual data sorting (or you can sort internally).

// 4. Add Row Selection
// Maintain selected row IDs in a useState hook (e.g., selectedRows).
// Allow selecting/deselecting individual rows via checkboxes.
// Add a checkbox in the header to select/deselect all rows at once.
// Pass the currently selected items to onSelect, if provided.

// 5. Implement Optional Filtering (Optional Feature)
// If you want filtering, you could add a filter method or callback that decides which rows are visible.
// For instance, you might pass a filter prop or manage it externally—this is flexible.

// 6. Render the Table
// Render a <table> element with <thead> and <tbody>.
// Map over data to create rows, and columns to create cells.
// Use a checkbox in each row for selection and in the header for “select all.”

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
