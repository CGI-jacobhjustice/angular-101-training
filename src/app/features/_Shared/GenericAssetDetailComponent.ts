import { Asset } from "@/models/Asset";
import { AssetService } from "@/services/asset.service";

export abstract class GenericAssetDetailComponent   {
  Service: AssetService
  CurrentAsset: Asset
  constructor(service: AssetService) {
    this.Service = service
    this.CurrentAsset = null;
  }

  GetAsset(id: number) {
    this.Service.getAssets().subscribe(data => {
      this.CurrentAsset = data.find(asset => {
        return asset.assetTagId == id;
      });
    });
  }
}