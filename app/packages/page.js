import PackagesClient from "./PackagesClient";
import { packagesData, oneTimePackages } from "../../data/packages";

export default function PackagesPage() {
    return <PackagesClient packages={packagesData} oneTimePackages={oneTimePackages} />;
}
