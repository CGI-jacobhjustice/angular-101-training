import { Asset } from "./Asset";
import { AssetService } from "@/services/asset.service";


export abstract class GenericAssetsListComponent   {
  constructor(AllAssets: Asset[], Service: AssetService) {}
}