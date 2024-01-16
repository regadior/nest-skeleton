export enum FileType {
  IMAGE = 'IMAGE',
  PDF = 'PDF',
  ENRICHED_TEXT = 'ENRICHED_TEXT',
}

export enum FileExtension {
  PNG = 'png',
  JPG = 'jpg',
  JPEG = 'jpeg',
  SVG = 'svg',
  TIFF = 'tiff',
  TIF = 'tif',
  BMP = 'bmp',
}

export const FileExtensionToFileType = new Map(
  Object.entries({
    pdf: FileType.PDF,
    png: FileType.IMAGE,
    jpg: FileType.IMAGE,
    jpeg: FileType.IMAGE,
    svg: FileType.IMAGE,
    tiff: FileType.IMAGE,
    tif: FileType.IMAGE,
    bmp: FileType.IMAGE,
    doc: FileType.ENRICHED_TEXT,
    docx: FileType.ENRICHED_TEXT,
    odt: FileType.ENRICHED_TEXT,
    default: 'NON_SUPPORTED',
  }),
);

export const getFileType = (fileExtension: string) => {
  return FileExtensionToFileType.has(fileExtension)
    ? FileExtensionToFileType.get(fileExtension)
    : FileExtensionToFileType.get('default');
};
