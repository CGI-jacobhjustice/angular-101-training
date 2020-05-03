import { Asset } from "@/models/Asset";
import { AssetService } from "@/services/asset.service";

export abstract class GenericAssetDetailComponent   {
  Service: AssetService
  CurrentAsset: Asset
  constructor(service: AssetService) {
    this.Service = service
    this.CurrentAsset = null; // TODO: Bad load until asset is found
  }

  GetAsset(id: number) {
    this.Service.getAsset(id).subscribe(data => {
      this.CurrentAsset = data;
    });
  }
}