export interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}
export const headCells: readonly HeadCell[] = [
    {
      id: 'userId',
      numeric: false,
      disablePadding: true,
      label: 'ID_USER',
    },
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID_POST',
    },
    {
      id: 'title',
      numeric: true,
      disablePadding: false,
      label: 'TITLE',
    },
    {
      id: 'body',
      numeric: true,
      disablePadding: false,
      label: 'POSTS',
    },
  ];
export function createData<T extends Data>({userId, id, title, body}: T): Data {
    return {
        userId,
        id,
        title,
        body
    };
}
