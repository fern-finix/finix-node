/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FinixApi } from "../../..";
import * as core from "../../../core";

export const MerchantResponse: core.schemas.ObjectSchema<MerchantResponse.Raw, FinixApi.identities.MerchantResponse> =
  core.schemas.object({
    id: core.schemas.string(),
    createdAt: core.schemas.property("created_at", core.schemas.date()),
    application: core.schemas.string(),
  });

export declare namespace MerchantResponse {
  interface Raw {
    id: string;
    created_at: string;
    application: string;
  }
}