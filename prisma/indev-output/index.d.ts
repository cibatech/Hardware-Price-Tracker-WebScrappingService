
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StaticLink
 * 
 */
export type StaticLink = $Result.DefaultSelection<Prisma.$StaticLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StaticLinks
 * const staticLinks = await prisma.staticLink.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StaticLinks
   * const staticLinks = await prisma.staticLink.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.staticLink`: Exposes CRUD operations for the **StaticLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaticLinks
    * const staticLinks = await prisma.staticLink.findMany()
    * ```
    */
  get staticLink(): Prisma.StaticLinkDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StaticLink: 'StaticLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "staticLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StaticLink: {
        payload: Prisma.$StaticLinkPayload<ExtArgs>
        fields: Prisma.StaticLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaticLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaticLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          findFirst: {
            args: Prisma.StaticLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaticLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          findMany: {
            args: Prisma.StaticLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>[]
          }
          create: {
            args: Prisma.StaticLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          createMany: {
            args: Prisma.StaticLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaticLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>[]
          }
          delete: {
            args: Prisma.StaticLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          update: {
            args: Prisma.StaticLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          deleteMany: {
            args: Prisma.StaticLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaticLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaticLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          aggregate: {
            args: Prisma.StaticLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaticLink>
          }
          groupBy: {
            args: Prisma.StaticLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaticLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaticLinkCountArgs<ExtArgs>
            result: $Utils.Optional<StaticLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model StaticLink
   */

  export type AggregateStaticLink = {
    _count: StaticLinkCountAggregateOutputType | null
    _avg: StaticLinkAvgAggregateOutputType | null
    _sum: StaticLinkSumAggregateOutputType | null
    _min: StaticLinkMinAggregateOutputType | null
    _max: StaticLinkMaxAggregateOutputType | null
  }

  export type StaticLinkAvgAggregateOutputType = {
    Id: number | null
  }

  export type StaticLinkSumAggregateOutputType = {
    Id: number | null
  }

  export type StaticLinkMinAggregateOutputType = {
    Id: number | null
    Link: string | null
    GeneratedAt: Date | null
  }

  export type StaticLinkMaxAggregateOutputType = {
    Id: number | null
    Link: string | null
    GeneratedAt: Date | null
  }

  export type StaticLinkCountAggregateOutputType = {
    Id: number
    Link: number
    GeneratedAt: number
    _all: number
  }


  export type StaticLinkAvgAggregateInputType = {
    Id?: true
  }

  export type StaticLinkSumAggregateInputType = {
    Id?: true
  }

  export type StaticLinkMinAggregateInputType = {
    Id?: true
    Link?: true
    GeneratedAt?: true
  }

  export type StaticLinkMaxAggregateInputType = {
    Id?: true
    Link?: true
    GeneratedAt?: true
  }

  export type StaticLinkCountAggregateInputType = {
    Id?: true
    Link?: true
    GeneratedAt?: true
    _all?: true
  }

  export type StaticLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticLink to aggregate.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaticLinks
    **/
    _count?: true | StaticLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaticLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaticLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaticLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaticLinkMaxAggregateInputType
  }

  export type GetStaticLinkAggregateType<T extends StaticLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateStaticLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaticLink[P]>
      : GetScalarType<T[P], AggregateStaticLink[P]>
  }




  export type StaticLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaticLinkWhereInput
    orderBy?: StaticLinkOrderByWithAggregationInput | StaticLinkOrderByWithAggregationInput[]
    by: StaticLinkScalarFieldEnum[] | StaticLinkScalarFieldEnum
    having?: StaticLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaticLinkCountAggregateInputType | true
    _avg?: StaticLinkAvgAggregateInputType
    _sum?: StaticLinkSumAggregateInputType
    _min?: StaticLinkMinAggregateInputType
    _max?: StaticLinkMaxAggregateInputType
  }

  export type StaticLinkGroupByOutputType = {
    Id: number
    Link: string
    GeneratedAt: Date
    _count: StaticLinkCountAggregateOutputType | null
    _avg: StaticLinkAvgAggregateOutputType | null
    _sum: StaticLinkSumAggregateOutputType | null
    _min: StaticLinkMinAggregateOutputType | null
    _max: StaticLinkMaxAggregateOutputType | null
  }

  type GetStaticLinkGroupByPayload<T extends StaticLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaticLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaticLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaticLinkGroupByOutputType[P]>
            : GetScalarType<T[P], StaticLinkGroupByOutputType[P]>
        }
      >
    >


  export type StaticLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Link?: boolean
    GeneratedAt?: boolean
  }, ExtArgs["result"]["staticLink"]>

  export type StaticLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Link?: boolean
    GeneratedAt?: boolean
  }, ExtArgs["result"]["staticLink"]>

  export type StaticLinkSelectScalar = {
    Id?: boolean
    Link?: boolean
    GeneratedAt?: boolean
  }


  export type $StaticLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaticLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Link: string
      GeneratedAt: Date
    }, ExtArgs["result"]["staticLink"]>
    composites: {}
  }

  type StaticLinkGetPayload<S extends boolean | null | undefined | StaticLinkDefaultArgs> = $Result.GetResult<Prisma.$StaticLinkPayload, S>

  type StaticLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StaticLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StaticLinkCountAggregateInputType | true
    }

  export interface StaticLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaticLink'], meta: { name: 'StaticLink' } }
    /**
     * Find zero or one StaticLink that matches the filter.
     * @param {StaticLinkFindUniqueArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaticLinkFindUniqueArgs>(args: SelectSubset<T, StaticLinkFindUniqueArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StaticLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StaticLinkFindUniqueOrThrowArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaticLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, StaticLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StaticLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkFindFirstArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaticLinkFindFirstArgs>(args?: SelectSubset<T, StaticLinkFindFirstArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StaticLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkFindFirstOrThrowArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaticLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, StaticLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StaticLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaticLinks
     * const staticLinks = await prisma.staticLink.findMany()
     * 
     * // Get first 10 StaticLinks
     * const staticLinks = await prisma.staticLink.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const staticLinkWithIdOnly = await prisma.staticLink.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends StaticLinkFindManyArgs>(args?: SelectSubset<T, StaticLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StaticLink.
     * @param {StaticLinkCreateArgs} args - Arguments to create a StaticLink.
     * @example
     * // Create one StaticLink
     * const StaticLink = await prisma.staticLink.create({
     *   data: {
     *     // ... data to create a StaticLink
     *   }
     * })
     * 
     */
    create<T extends StaticLinkCreateArgs>(args: SelectSubset<T, StaticLinkCreateArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StaticLinks.
     * @param {StaticLinkCreateManyArgs} args - Arguments to create many StaticLinks.
     * @example
     * // Create many StaticLinks
     * const staticLink = await prisma.staticLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaticLinkCreateManyArgs>(args?: SelectSubset<T, StaticLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaticLinks and returns the data saved in the database.
     * @param {StaticLinkCreateManyAndReturnArgs} args - Arguments to create many StaticLinks.
     * @example
     * // Create many StaticLinks
     * const staticLink = await prisma.staticLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaticLinks and only return the `Id`
     * const staticLinkWithIdOnly = await prisma.staticLink.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaticLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, StaticLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StaticLink.
     * @param {StaticLinkDeleteArgs} args - Arguments to delete one StaticLink.
     * @example
     * // Delete one StaticLink
     * const StaticLink = await prisma.staticLink.delete({
     *   where: {
     *     // ... filter to delete one StaticLink
     *   }
     * })
     * 
     */
    delete<T extends StaticLinkDeleteArgs>(args: SelectSubset<T, StaticLinkDeleteArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StaticLink.
     * @param {StaticLinkUpdateArgs} args - Arguments to update one StaticLink.
     * @example
     * // Update one StaticLink
     * const staticLink = await prisma.staticLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaticLinkUpdateArgs>(args: SelectSubset<T, StaticLinkUpdateArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StaticLinks.
     * @param {StaticLinkDeleteManyArgs} args - Arguments to filter StaticLinks to delete.
     * @example
     * // Delete a few StaticLinks
     * const { count } = await prisma.staticLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaticLinkDeleteManyArgs>(args?: SelectSubset<T, StaticLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaticLinks
     * const staticLink = await prisma.staticLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaticLinkUpdateManyArgs>(args: SelectSubset<T, StaticLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StaticLink.
     * @param {StaticLinkUpsertArgs} args - Arguments to update or create a StaticLink.
     * @example
     * // Update or create a StaticLink
     * const staticLink = await prisma.staticLink.upsert({
     *   create: {
     *     // ... data to create a StaticLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaticLink we want to update
     *   }
     * })
     */
    upsert<T extends StaticLinkUpsertArgs>(args: SelectSubset<T, StaticLinkUpsertArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StaticLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkCountArgs} args - Arguments to filter StaticLinks to count.
     * @example
     * // Count the number of StaticLinks
     * const count = await prisma.staticLink.count({
     *   where: {
     *     // ... the filter for the StaticLinks we want to count
     *   }
     * })
    **/
    count<T extends StaticLinkCountArgs>(
      args?: Subset<T, StaticLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaticLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaticLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaticLinkAggregateArgs>(args: Subset<T, StaticLinkAggregateArgs>): Prisma.PrismaPromise<GetStaticLinkAggregateType<T>>

    /**
     * Group by StaticLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaticLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaticLinkGroupByArgs['orderBy'] }
        : { orderBy?: StaticLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaticLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaticLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaticLink model
   */
  readonly fields: StaticLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaticLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaticLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaticLink model
   */ 
  interface StaticLinkFieldRefs {
    readonly Id: FieldRef<"StaticLink", 'Int'>
    readonly Link: FieldRef<"StaticLink", 'String'>
    readonly GeneratedAt: FieldRef<"StaticLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaticLink findUnique
   */
  export type StaticLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink findUniqueOrThrow
   */
  export type StaticLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink findFirst
   */
  export type StaticLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticLinks.
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticLinks.
     */
    distinct?: StaticLinkScalarFieldEnum | StaticLinkScalarFieldEnum[]
  }

  /**
   * StaticLink findFirstOrThrow
   */
  export type StaticLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticLinks.
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticLinks.
     */
    distinct?: StaticLinkScalarFieldEnum | StaticLinkScalarFieldEnum[]
  }

  /**
   * StaticLink findMany
   */
  export type StaticLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLinks to fetch.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaticLinks.
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    distinct?: StaticLinkScalarFieldEnum | StaticLinkScalarFieldEnum[]
  }

  /**
   * StaticLink create
   */
  export type StaticLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a StaticLink.
     */
    data: XOR<StaticLinkCreateInput, StaticLinkUncheckedCreateInput>
  }

  /**
   * StaticLink createMany
   */
  export type StaticLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaticLinks.
     */
    data: StaticLinkCreateManyInput | StaticLinkCreateManyInput[]
  }

  /**
   * StaticLink createManyAndReturn
   */
  export type StaticLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StaticLinks.
     */
    data: StaticLinkCreateManyInput | StaticLinkCreateManyInput[]
  }

  /**
   * StaticLink update
   */
  export type StaticLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a StaticLink.
     */
    data: XOR<StaticLinkUpdateInput, StaticLinkUncheckedUpdateInput>
    /**
     * Choose, which StaticLink to update.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink updateMany
   */
  export type StaticLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaticLinks.
     */
    data: XOR<StaticLinkUpdateManyMutationInput, StaticLinkUncheckedUpdateManyInput>
    /**
     * Filter which StaticLinks to update
     */
    where?: StaticLinkWhereInput
  }

  /**
   * StaticLink upsert
   */
  export type StaticLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the StaticLink to update in case it exists.
     */
    where: StaticLinkWhereUniqueInput
    /**
     * In case the StaticLink found by the `where` argument doesn't exist, create a new StaticLink with this data.
     */
    create: XOR<StaticLinkCreateInput, StaticLinkUncheckedCreateInput>
    /**
     * In case the StaticLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaticLinkUpdateInput, StaticLinkUncheckedUpdateInput>
  }

  /**
   * StaticLink delete
   */
  export type StaticLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter which StaticLink to delete.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink deleteMany
   */
  export type StaticLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticLinks to delete
     */
    where?: StaticLinkWhereInput
  }

  /**
   * StaticLink without action
   */
  export type StaticLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StaticLinkScalarFieldEnum: {
    Id: 'Id',
    Link: 'Link',
    GeneratedAt: 'GeneratedAt'
  };

  export type StaticLinkScalarFieldEnum = (typeof StaticLinkScalarFieldEnum)[keyof typeof StaticLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type StaticLinkWhereInput = {
    AND?: StaticLinkWhereInput | StaticLinkWhereInput[]
    OR?: StaticLinkWhereInput[]
    NOT?: StaticLinkWhereInput | StaticLinkWhereInput[]
    Id?: IntFilter<"StaticLink"> | number
    Link?: StringFilter<"StaticLink"> | string
    GeneratedAt?: DateTimeFilter<"StaticLink"> | Date | string
  }

  export type StaticLinkOrderByWithRelationInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
  }

  export type StaticLinkWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: StaticLinkWhereInput | StaticLinkWhereInput[]
    OR?: StaticLinkWhereInput[]
    NOT?: StaticLinkWhereInput | StaticLinkWhereInput[]
    Link?: StringFilter<"StaticLink"> | string
    GeneratedAt?: DateTimeFilter<"StaticLink"> | Date | string
  }, "Id">

  export type StaticLinkOrderByWithAggregationInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
    _count?: StaticLinkCountOrderByAggregateInput
    _avg?: StaticLinkAvgOrderByAggregateInput
    _max?: StaticLinkMaxOrderByAggregateInput
    _min?: StaticLinkMinOrderByAggregateInput
    _sum?: StaticLinkSumOrderByAggregateInput
  }

  export type StaticLinkScalarWhereWithAggregatesInput = {
    AND?: StaticLinkScalarWhereWithAggregatesInput | StaticLinkScalarWhereWithAggregatesInput[]
    OR?: StaticLinkScalarWhereWithAggregatesInput[]
    NOT?: StaticLinkScalarWhereWithAggregatesInput | StaticLinkScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"StaticLink"> | number
    Link?: StringWithAggregatesFilter<"StaticLink"> | string
    GeneratedAt?: DateTimeWithAggregatesFilter<"StaticLink"> | Date | string
  }

  export type StaticLinkCreateInput = {
    Link: string
    GeneratedAt: Date | string
  }

  export type StaticLinkUncheckedCreateInput = {
    Id?: number
    Link: string
    GeneratedAt: Date | string
  }

  export type StaticLinkUpdateInput = {
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaticLinkUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaticLinkCreateManyInput = {
    Id?: number
    Link: string
    GeneratedAt: Date | string
  }

  export type StaticLinkUpdateManyMutationInput = {
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaticLinkUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StaticLinkCountOrderByAggregateInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
  }

  export type StaticLinkAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type StaticLinkMaxOrderByAggregateInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
  }

  export type StaticLinkMinOrderByAggregateInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
  }

  export type StaticLinkSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StaticLinkDefaultArgs instead
     */
    export type StaticLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaticLinkDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}