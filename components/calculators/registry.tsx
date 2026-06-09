import type { ReactNode } from "react";
import { IncomeTaxCalc } from "./IncomeTaxCalc";
import { TdsCalc, GstRateCalc, GstMrpCalc, HraCalc, EmiCalc } from "./SimpleCalcs";
import { CapitalGainsCalc } from "./CapitalGainsCalc";
import { EsopCalc } from "./EsopCalc";
import {
  NetWorthCalc,
  NetProfitCalc,
  NscCalc,
  CfoRoiCalc,
  GstRefundCalc,
  ReraCalc,
  AifWaterfallCalc,
} from "./MoreCalcs";

/** Maps a calculator slug to its interactive component. */
export const calcComponents: Record<string, ReactNode> = {
  "income-tax": <IncomeTaxCalc />,
  tds: <TdsCalc />,
  "gst-rate": <GstRateCalc />,
  "gst-mrp": <GstMrpCalc />,
  hra: <HraCalc />,
  "capital-gains": <CapitalGainsCalc />,
  esop: <EsopCalc />,
  emi: <EmiCalc />,
  "net-worth": <NetWorthCalc />,
  "net-profit": <NetProfitCalc />,
  nsc: <NscCalc />,
  "cfo-roi": <CfoRoiCalc />,
  "gst-refund-estimator": <GstRefundCalc />,
  rera: <ReraCalc />,
  "aif-waterfall": <AifWaterfallCalc />,
};
