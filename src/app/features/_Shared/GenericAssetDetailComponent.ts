import { Asset } from "@/models/asset";
import { AssetService } from "@/services/asset.service";
import { NGXLogger } from "ngx-logger";

export abstract class GenericAssetDetailComponent   {
  Service: AssetService
  CurrentAsset: Asset
  Logger: NGXLogger
  protected id: number
  constructor(id:number, service: AssetService, logger: NGXLogger) {
    this.Service = service
    this.Logger = logger;
    this.id = id;
  }

  ngOnInit() {
    this.GetAsset()
  }

  GetAsset() {
    if(this.id > 0) {
      this.Service.getAsset(this.id).subscribe(data => {
        this.CurrentAsset = data;
        this.GetAssetCallback();
      });
    }
  }

  GetAssetCallback() {
    
  }
}