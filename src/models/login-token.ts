export class LoginToken {
    iss?: string;
    Email?: string;
    UserId?: string;
    jti?: string;
    iat?: number;
    UserType?: string;
    BranchId?: string;
    ChannelId?: string;
    InstanceId?: string;
    TokenId?: string;
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?: string[];
    nbf?: number;
    exp?: number;
    aud?: string;
}