import { Asset } from "@/models/Asset";
import { AssetService } from "@/services/asset.service";

export abstract class GenericAssetDetailComponent   {
  constructor(CurrentAsset: Asset, Service: AssetService) {}
}