import { APIRequestContext, Page } from "@playwright/test";
import { Logger } from "winston";
import { LoginPage } from "../pages/loginPage";

export const fixture = {
    page: undefined as unknown as Page,
    request: undefined as unknown as APIRequestContext,
    logger: undefined as unknown as Logger,
    loginPage: undefined as unknown as LoginPage,
};