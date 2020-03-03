import { Asset } from "./Asset";
import { AssetService } from "@/services/asset.service";

export abstract class GenericAssetDetailComponent   {
  CurrentAsset: Asset
  constructor(CurrentAsset: Asset, Service: AssetService) {}
}