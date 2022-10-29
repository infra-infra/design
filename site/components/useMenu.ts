import { useEffect, useState } from "react";

const useMenu = () => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    const files = require.context("../../components/", true, /demo.md$/);
    const components = files
      .keys()
      .map((item) => {
        return {
          path: item.replace("./", "").replace("/demo.md", ""),
          component: files(item).default,
        };
      })
      .filter((item) => item.path);
    setList(components);
  }, []);
  return list;
};
export default useMenu;
