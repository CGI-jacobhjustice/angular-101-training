export enum Type {
    DESKTOP = 1,
    LAPTOP = 2,
    DISPLAY = 3,
    PHONE = 4,
    EXTERNAL_HARD_DRIVE = 5,
    OTHER = 6,
};

const TypeNames = new Map<number, string>([
    [Type.DESKTOP, 'Desktop'],
    [Type.LAPTOP, 'Laptop'],
    [Type.DISPLAY, 'Display'],
    [Type.PHONE, 'Phone'],
    [Type.EXTERNAL_HARD_DRIVE, 'External Hard Drive'],
    [Type.OTHER, 'Other'],
  ]);

export function TypeToName(t : Type ) {
    return TypeNames[t];
}