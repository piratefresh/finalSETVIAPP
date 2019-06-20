import fetch from "node-fetch";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16TkRPVUU1T1RkRE1qZENNVVpGTWpnM05VUXpRelV5TmpFME0wUTRNVVpFUVRVMk9UTXhRZyJ9.eyJuYW1lIjoic3JpbmlAc3JpbmkuY29tIiwiZW1haWwiOiJzcmluaUBzcmluaS5jb20iLCJhcHBUeXBlIjoiMiIsImlzcyI6Imh0dHBzOi8vc2V0dmkuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfHNyaW5pQHNyaW5pLmNvbSIsImF1ZCI6ImJOSER0VVZLR0U4dU5RdUNuQk9QdjJyeHZaNDhOdUtQIiwiaWF0IjoxNTU5NzU5MDA5LCJleHAiOjE1OTA4NjMwMDl9.fz-xwGbGf0n1-_BXbEjQvLMTaTJC48yBhjQBrn6mXnTNqzqBYwFfLrdjzHewBClVFH9iRPffLmfZZO23ZpTbTljJ11sS8YtzI3pOEnTepIksleehnfTzbfAL_j1IM1rs6uiWnqg1xI-oqSLO_D7pnwp24Puds44It2LSj4-WH5c1XaAMfKU147qqkvX8LQ98CXTYsdzNt6CcX1x1LvRJpPIZ9Z2oGusLu3E_sv1SmGL5dAKSVjWAAiGjViTft-ngo9hG5SZj0nQXeM5S2ygCQUU5nBK0YbkJnXfeAxpvbr3W5CRGqE9xzf32hADUDC7XizKZosij63cTjtQG5MwZ0w";

export default {
  Template: {
    Thumbnail: async parent => {
      const response = await `https://dev51.setvi.com/WebAPI/getresourcethumb?token=${JWT}&resourceid=${
        parent.Resources[0]
      }&ischild=true`;
      return response;
    },
    DateAdded: (obj, args) => {
      const date = new Date(parseInt(obj.DateAdded.substr(6)));
      const parsedDate = dayjs(date).format("DD/MMM/YYYY");
      return parsedDate;
    },
    LastChanged: (obj, args) => {
      if (obj.LastChanged === null) {
        return "Not Edited";
      }
      const date = new Date(parseInt(obj.LastChanged.substr(6)));
      const parsedDate = dayjs(date).format("DD/MMM/YYYY");
      return parsedDate;
    }
  },
  Query: {
    getTemplates: async (_, args) => {
      const response = await fetch(
        `https://dev51.setvi.com/WebAPI/GetTemplates`,
        {
          method: "post",
          headers: {Authorization: "Bearer " + JWT}
        }
      );
      const data = await response.json();
      return data.Data;
    }
  }
};

// https://dev51.setvi.com/webapi/getresourcethumb?token=${JWT}&resourceid=6SVSD2002&ischild=true
// https://dev51.setvi.com/webapi/getresourcethumb?token=${JWT}&resourceid=6SVSD2002&ischild=true
