"use client";

import Loading from "@/loading";
import React, { useEffect, useState } from "react";
import ListCardContainer from "./list-cart";
import { getAllBreaks } from "@/data/break";
import { BreaksData } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface BreakFormListContainerProps {
  editBreak: Function;
}

const BreakFormListContainer = (props: BreakFormListContainerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["break"],
    queryFn: async () => {
      const data = await getAllBreaks();
      return JSON.parse(data.data) as BreaksData[];
    },
  });
  const breaks = data;

  if (isError) {
    return (
      <div>
        <p>something went wrong</p>
      </div>
    );
  }

  return (
    <div className="w-auto h-[400px] sm:h-[500px] md:h-[700px] lg:h-[650px]  overflow-auto p-1 bg-slate-50 rounded-md  ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" w-full grid-col  grid grid-cols-1 sm:grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-2 gap-6 m-1">
          {breaks?.map((info: BreaksData, index: number) => {
            return (
              <div className="h-auto" key={index}>
                <ListCardContainer breaks={info} editBreak={props.editBreak} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default BreakFormListContainer;