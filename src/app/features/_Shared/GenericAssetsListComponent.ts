import { Asset } from "@/models/asset";
import { AssetService } from "@/services/asset.service";
import { NGXLogger } from "ngx-logger";


export abstract class GenericAssetsListComponent   {
  AllAssets: Asset[]
  Service: AssetService
  Logger: NGXLogger

  constructor(service: AssetService, logger: NGXLogger) {
    this.Service = service
    this.AllAssets = [];
    this.Logger = logger;
  }

  ngOnInit() {
    this.GetAssets()
  }
  
  abstract GetAssets();
}