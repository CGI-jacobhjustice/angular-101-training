import { Asset } from "@/models/asset";
import { AssetService } from "@/services/asset.service";

export abstract class GenericAssetDetailComponent   {
  Service: AssetService
  CurrentAsset: Asset
  constructor(service: AssetService) {
    this.Service = service
    this.CurrentAsset = new Asset();
  }

  GetAsset(id: number, callback: Function) {
    this.Service.getAsset(id).subscribe(data => {
      this.CurrentAsset = data;

      if(callback != undefined) {
        callback();
      }
    });
  }
}