import { RootState } from "@/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useThreshold():{Threshold:Date}{
    const selectMenu = useSelector((state: RootState) => state.transactions.charDisplay);
   const Threshold = useMemo(() => {
    const now = new Date();
    switch (selectMenu.value) {
      case "1Week":
        now.setDate(now.getDate() - 7);
        break;
      case "2Week":
        now.setDate(now.getDate() - 14);
        break;
      case "Month":
        now.setMonth(now.getMonth() - 1);
        break;
      case "3Month":
        now.setMonth(now.getMonth() - 3);
        break;
      case "6Month":
        now.setMonth(now.getMonth() - 6);
        break;
      default:
        return new Date(0);
    }
    return now;
  },[selectMenu])
  return {Threshold};
}