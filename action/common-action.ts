"use server";

import { cookies } from "next/headers";

export const convertToUAEFormat = (dateString: string) => {
  const date = new Date(dateString);
  var localTime = date.getTime();
  var localOffset = date.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var offset = 4; //UTC of Dubai is +04.00
  var dubai = utc + 3600000 * offset;
  var nd = new Date(dubai);
  return nd.toLocaleString();
};