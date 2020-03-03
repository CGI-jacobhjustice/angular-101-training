export class Asset {
    ID: number;
    Type: number; // TODO: Enum
    Description: string;
    AssignedEmployeeID: string;
    DateAdded: Date;
    IsRetired: boolean;
    DateRetired: Date;
}