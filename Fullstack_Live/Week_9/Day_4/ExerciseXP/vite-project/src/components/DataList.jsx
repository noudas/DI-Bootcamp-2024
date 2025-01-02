import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/DataSlice";

const DataList = (props) => {
    const data_list = useSelector((state) => state.DataReducer.data);
    const status = useSelector((state) => state.DataReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (status === "pending") return <h2>Loading Todos.... </h2>;
    if (status === "failed") return <h2>Something went Wrong! </h2>;

    return (
        <>
            <h1>User List</h1>
            {data_list.map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.name}</h3>
                    <h3>{item.username}</h3>
                    <p>{item.email}</p>
                </div>
            ))}
        </>
    );
};

export default DataList;
