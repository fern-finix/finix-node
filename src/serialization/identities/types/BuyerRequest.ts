/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FinixApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const BuyerRequest: core.schemas.ObjectSchema<BuyerRequest.Raw, FinixApi.identities.BuyerRequest> =
  core.schemas.object({
    entity: core.schemas.lazyObject(() => serializers.identities.Entity),
    tags: core.schemas.lazyObject(() => serializers.identities.Tags),
  });

export declare namespace BuyerRequest {
  interface Raw {
    entity: serializers.identities.Entity.Raw;
    tags: serializers.identities.Tags.Raw;
  }
}
