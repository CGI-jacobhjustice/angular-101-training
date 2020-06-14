import { Asset } from "@/models/asset";
import { AssetService } from "@/services/asset.service";


export abstract class GenericAssetsListComponent   {
  AllAssets: Asset[]
  Service: AssetService

  constructor(service: AssetService) {
    this.Service = service
    this.AllAssets = [];

    this.GetAssets();
  }

  abstract GetAssets();
}