import { Context, fetchMailInfo, getInvoiceDownloadUrls } from "./common"
import * as cheerio from "cheerio";

const dir = './pdf/sinopec'

async function getSinopecMailDownloadUrls(context: Context, mailId: string) {
  const res = await fetchMailInfo(context, mailId)
  const $ = cheerio.load(res);
  console.log(res)
  const link = $('a[href*=".pdf"]');
  // if (link.length === 1) {
  //   return {
  //     downloadLink: link[0].attribs["href"],
  //     invoiceId: "",
  //   };
  // }
  // throw new Error(mailId);
}
export async function downloadInvocePdfs(context: Context) {
  const sinopec_context = { ...context, mailSender: "statement.bjsy@sinopec.com" }
  const res = await getInvoiceDownloadUrls(sinopec_context, getSinopecMailDownloadUrls)
}