import axios from "axios";

const ratpClient = axios.create({
  baseURL: "https://api-ratp.pierre-grimaud.fr/v4",
});

export namespace ratp {
  export const traffic = async (): Promise<Traffic> => {
    return ratpClient.get("/traffic").then((req) => req.data.result);
  };

  export const stations = async (type: PluralLineType, line: string): Promise<Station[]> => {
    return ratpClient.get(`/stations/${type}/${line}`).then((req) => req.data.result.stations);
  };

  export const schedules = async (type: PluralLineType, line: string, station: string): Promise<Station[]> => {
    return ratpClient.get(`/schedules/${type}/${line}/${station}/A`).then((req) => req.data.result.schedules);
  };
}

export type LineTraffic = {
  line: string;
  slug: TrafficSlug;
  title: string;
  message: string;
};

export type Traffic = {
  metros: LineTraffic[];
  rers: LineTraffic[];
  tramways: LineTraffic[];
};

export type Station = {
  name: string;
  slug: string;
};

export type LineType = "metro" | "rer" | "tramway" | "bus";
export type PluralLineType = "metros" | "rers" | "tramways" | "buses";
export type TrafficSlug = "normal" | "normal_trav" | "critical";
