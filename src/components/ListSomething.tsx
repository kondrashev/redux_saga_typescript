import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actionData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { rootState } from "../redux/rootReducer";

const ListSomething: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { data } = useSelector((state: rootState) => state.dataReducer);
  return (
    <Box>
      <List>
        {data.map((item:{id: number, title: string}) => (
          <ListItem key={item.id}>
            {item.title}
          </ListItem>
        ))}
      </List>
    </Box>
  )
};
export default ListSomething;
