export type NumberRangeFilter = { lte?: number; gte?: number };
export type NumberFilter = number;

export type StringLikeFilter = { contains: string; mode: 'insensitive' };
export type StringFilter = string;

export type BooleanFilter = boolean;

export type ArrayFilter = { in: any[] };
export type SearchArrayFilter = { some: { OR: any[] } };

export type DateFilter = Date;
export type DateRangeFilter = { lte?: DateFilter; gte?: DateFilter };

export class QueryFilter {
  public mapNumberFilter(
    exact: number | undefined,
    lte: number | undefined,
    gte: number | undefined,
  ): NumberRangeFilter | NumberFilter {
    return (
      exact ?? {
        lte: lte,
        gte: gte,
      }
    );
  }

  public mapStringLikeFilter(value: string): StringLikeFilter {
    return { contains: value, mode: 'insensitive' };
  }

  public mapArrayFilter(values: any[]): ArrayFilter {
    return { in: values };
  }

  public mapSearchArrayFilter(values: any[]): SearchArrayFilter {
    return {
      some: { OR: values },
    };
  }
}
