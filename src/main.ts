import { formatDate, firstDayOfYear, tomorrow } from "./utils";
import { Context } from "./common";
import { downloadInvocePdfs as jdDownloadInvocePdfs } from "./jd";
import { downloadInvocePdfs as sinopecDownloadInvocePdfs } from "./sinopec";


const sid = "OXQ1YTNvMy4zYzN1MGkwQDhi";
const cid = "T1hRMVlUTnZNeTR6WXpOMU1Ha3dRRGhp";
const uid = "tao.cui@bjyada.com";

const context: Context = {
  sid,
  cid,
  uid,
  encodeUid: encodeURIComponent(uid),
  cookies: `cid_${uid.replace("@", "_")}=${cid};`,
  startData: formatDate(firstDayOfYear) + " 00:00:00",
  endData: formatDate(tomorrow) + " 00:00:00",
  mailSender: "",
};

sinopecDownloadInvocePdfs(context)