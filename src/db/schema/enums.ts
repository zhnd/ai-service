// Enum definitions for the database schema

export const thirdPartyAccountStatus = ['NORMAL', 'DEACTIVATE', 'BAN'] as const;
export const thirdPartyAccountType = ['GOOGLE', 'MICROSOFT', 'CLAUDE', 'APPLE_ID', 'OPEN_AI'] as const;

// Type definitions
export type ThirdPartyAccountStatus = typeof thirdPartyAccountStatus[number];
export type ThirdPartyAccountType = typeof thirdPartyAccountType[number];