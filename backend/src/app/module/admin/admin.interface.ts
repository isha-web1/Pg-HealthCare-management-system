export interface IAdminFilterRequest {
  name?: string;
  email?: string;
  contactNumber?: string;
  createdAt?: {
    from?: Date;
    to?: Date;
  };
}