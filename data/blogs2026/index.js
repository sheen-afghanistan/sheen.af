// The 2026 article series, split into batches of five so no single data file
// becomes unmanageable. Each batch default-exports an array of posts in the
// same shape as data/blogs.js, plus an optional `faqs` and `updated` field.
import batch01 from "./batch01";
import batch02 from "./batch02";
import batch03 from "./batch03";
import batch04 from "./batch04";
import batch05 from "./batch05";
import batch06 from "./batch06";
import batch07 from "./batch07";
import batch08 from "./batch08";
import batch09 from "./batch09";
import batch10 from "./batch10";
import batch11 from "./batch11";
import batch12 from "./batch12";
import batch13 from "./batch13";
import batch14 from "./batch14";
import batch15 from "./batch15";
import batch16 from "./batch16";
import batch17 from "./batch17";
import batch18 from "./batch18";
import batch19 from "./batch19";
import batch20 from "./batch20";
import batch21 from "./batch21";
import batch22 from "./batch22";

export const blogs2026 = [
    ...batch01, ...batch02, ...batch03, ...batch04, ...batch05,
    ...batch06, ...batch07, ...batch08, ...batch09, ...batch10,
    ...batch11, ...batch12, ...batch13, ...batch14, ...batch15,
    ...batch16, ...batch17, ...batch18, ...batch19, ...batch20,
    ...batch21, ...batch22,
];

export default blogs2026;
