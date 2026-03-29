type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

// we can combine the above types by applying intersection
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;


// same thing can be done with interfaces also

// interface FileData {
//   path: string;
//   content: string;
// };

// interface DatabaseData {
//   connectionUrl: string;
//   credentials: string;
// };

// interface Status {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// // we can combine the above types by applying intersection
// interface AccessedFileData extends FileData,Status{}
// interface AccessedDatabaseData extends DatabaseData,Status{}