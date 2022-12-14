/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FinixApi } from "../../..";
import * as core from "../../../core";

export const AdditionalUnderwritingData: core.schemas.ObjectSchema<
  AdditionalUnderwritingData.Raw,
  FinixApi.identities.AdditionalUnderwritingData
> = core.schemas.object({
  annualAchVolume: core.schemas.property("annual_ach_volume", core.schemas.number().optional()),
  averageAchTransferAmount: core.schemas.property("average_ach_transfer_amount", core.schemas.number().optional()),
  averageCardTransferAmount: core.schemas.property("average_card_transfer_amount", core.schemas.number().optional()),
  businessDescription: core.schemas.property("business_description", core.schemas.string()),
});

export declare namespace AdditionalUnderwritingData {
  interface Raw {
    annual_ach_volume?: number | null;
    average_ach_transfer_amount?: number | null;
    average_card_transfer_amount?: number | null;
    business_description: string;
  }
}
