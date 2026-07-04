
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Major
 * 
 */
export type Major = $Result.DefaultSelection<Prisma.$MajorPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model gameSessions
 * 
 */
export type gameSessions = $Result.DefaultSelection<Prisma.$gameSessionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Majors
 * const majors = await prisma.major.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Majors
   * const majors = await prisma.major.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.major`: Exposes CRUD operations for the **Major** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.major.findMany()
    * ```
    */
  get major(): Prisma.MajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSessions`: Exposes CRUD operations for the **gameSessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSessions.findMany()
    * ```
    */
  get gameSessions(): Prisma.gameSessionsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Major: 'Major',
    Users: 'Users',
    gameSessions: 'gameSessions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "major" | "users" | "gameSessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Major: {
        payload: Prisma.$MajorPayload<ExtArgs>
        fields: Prisma.MajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findFirst: {
            args: Prisma.MajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findMany: {
            args: Prisma.MajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          create: {
            args: Prisma.MajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          createMany: {
            args: Prisma.MajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          update: {
            args: Prisma.MajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          deleteMany: {
            args: Prisma.MajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          aggregate: {
            args: Prisma.MajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajor>
          }
          groupBy: {
            args: Prisma.MajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      gameSessions: {
        payload: Prisma.$gameSessionsPayload<ExtArgs>
        fields: Prisma.gameSessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameSessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameSessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>
          }
          findFirst: {
            args: Prisma.gameSessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameSessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>
          }
          findMany: {
            args: Prisma.gameSessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>[]
          }
          create: {
            args: Prisma.gameSessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>
          }
          createMany: {
            args: Prisma.gameSessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gameSessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>
          }
          update: {
            args: Prisma.gameSessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>
          }
          deleteMany: {
            args: Prisma.gameSessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameSessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gameSessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameSessionsPayload>
          }
          aggregate: {
            args: Prisma.GameSessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSessions>
          }
          groupBy: {
            args: Prisma.gameSessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameSessionsCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    major?: MajorOmit
    users?: UsersOmit
    gameSessions?: gameSessionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type MajorCountOutputType
   */

  export type MajorCountOutputType = {
    users: number
  }

  export type MajorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MajorCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCountOutputType
     */
    select?: MajorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    gameSessions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSessions?: boolean | UsersCountOutputTypeCountGameSessionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameSessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Major
   */

  export type AggregateMajor = {
    _count: MajorCountAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  export type MajorMinAggregateOutputType = {
    idMajor: string | null
    name: string | null
    code: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MajorMaxAggregateOutputType = {
    idMajor: string | null
    name: string | null
    code: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MajorCountAggregateOutputType = {
    idMajor: number
    name: number
    code: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MajorMinAggregateInputType = {
    idMajor?: true
    name?: true
    code?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MajorMaxAggregateInputType = {
    idMajor?: true
    name?: true
    code?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MajorCountAggregateInputType = {
    idMajor?: true
    name?: true
    code?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Major to aggregate.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Majors
    **/
    _count?: true | MajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorMaxAggregateInputType
  }

  export type GetMajorAggregateType<T extends MajorAggregateArgs> = {
        [P in keyof T & keyof AggregateMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajor[P]>
      : GetScalarType<T[P], AggregateMajor[P]>
  }




  export type MajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithAggregationInput | MajorOrderByWithAggregationInput[]
    by: MajorScalarFieldEnum[] | MajorScalarFieldEnum
    having?: MajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCountAggregateInputType | true
    _min?: MajorMinAggregateInputType
    _max?: MajorMaxAggregateInputType
  }

  export type MajorGroupByOutputType = {
    idMajor: string
    name: string
    code: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: MajorCountAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  type GetMajorGroupByPayload<T extends MajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorGroupByOutputType[P]>
            : GetScalarType<T[P], MajorGroupByOutputType[P]>
        }
      >
    >


  export type MajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMajor?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Major$usersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["major"]>



  export type MajorSelectScalar = {
    idMajor?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMajor" | "name" | "code" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["major"]>
  export type MajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Major$usersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Major"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idMajor: string
      name: string
      code: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["major"]>
    composites: {}
  }

  type MajorGetPayload<S extends boolean | null | undefined | MajorDefaultArgs> = $Result.GetResult<Prisma.$MajorPayload, S>

  type MajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCountAggregateInputType | true
    }

  export interface MajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Major'], meta: { name: 'Major' } }
    /**
     * Find zero or one Major that matches the filter.
     * @param {MajorFindUniqueArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorFindUniqueArgs>(args: SelectSubset<T, MajorFindUniqueArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Major that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorFindUniqueOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorFindFirstArgs>(args?: SelectSubset<T, MajorFindFirstArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.major.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.major.findMany({ take: 10 })
     * 
     * // Only select the `idMajor`
     * const majorWithIdMajorOnly = await prisma.major.findMany({ select: { idMajor: true } })
     * 
     */
    findMany<T extends MajorFindManyArgs>(args?: SelectSubset<T, MajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Major.
     * @param {MajorCreateArgs} args - Arguments to create a Major.
     * @example
     * // Create one Major
     * const Major = await prisma.major.create({
     *   data: {
     *     // ... data to create a Major
     *   }
     * })
     * 
     */
    create<T extends MajorCreateArgs>(args: SelectSubset<T, MajorCreateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Majors.
     * @param {MajorCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCreateManyArgs>(args?: SelectSubset<T, MajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Major.
     * @param {MajorDeleteArgs} args - Arguments to delete one Major.
     * @example
     * // Delete one Major
     * const Major = await prisma.major.delete({
     *   where: {
     *     // ... filter to delete one Major
     *   }
     * })
     * 
     */
    delete<T extends MajorDeleteArgs>(args: SelectSubset<T, MajorDeleteArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Major.
     * @param {MajorUpdateArgs} args - Arguments to update one Major.
     * @example
     * // Update one Major
     * const major = await prisma.major.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorUpdateArgs>(args: SelectSubset<T, MajorUpdateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Majors.
     * @param {MajorDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.major.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorDeleteManyArgs>(args?: SelectSubset<T, MajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorUpdateManyArgs>(args: SelectSubset<T, MajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Major.
     * @param {MajorUpsertArgs} args - Arguments to update or create a Major.
     * @example
     * // Update or create a Major
     * const major = await prisma.major.upsert({
     *   create: {
     *     // ... data to create a Major
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Major we want to update
     *   }
     * })
     */
    upsert<T extends MajorUpsertArgs>(args: SelectSubset<T, MajorUpsertArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.major.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends MajorCountArgs>(
      args?: Subset<T, MajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MajorAggregateArgs>(args: Subset<T, MajorAggregateArgs>): Prisma.PrismaPromise<GetMajorAggregateType<T>>

    /**
     * Group by Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorGroupByArgs} args - Group by arguments.
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
      T extends MajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorGroupByArgs['orderBy'] }
        : { orderBy?: MajorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Major model
   */
  readonly fields: MajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Major.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Major$usersArgs<ExtArgs> = {}>(args?: Subset<T, Major$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Major model
   */
  interface MajorFieldRefs {
    readonly idMajor: FieldRef<"Major", 'String'>
    readonly name: FieldRef<"Major", 'String'>
    readonly code: FieldRef<"Major", 'String'>
    readonly description: FieldRef<"Major", 'String'>
    readonly createdAt: FieldRef<"Major", 'DateTime'>
    readonly updatedAt: FieldRef<"Major", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Major findUnique
   */
  export type MajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findUniqueOrThrow
   */
  export type MajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findFirst
   */
  export type MajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findFirstOrThrow
   */
  export type MajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findMany
   */
  export type MajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Majors to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major create
   */
  export type MajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to create a Major.
     */
    data: XOR<MajorCreateInput, MajorUncheckedCreateInput>
  }

  /**
   * Major createMany
   */
  export type MajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major update
   */
  export type MajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to update a Major.
     */
    data: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
    /**
     * Choose, which Major to update.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major updateMany
   */
  export type MajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major upsert
   */
  export type MajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The filter to search for the Major to update in case it exists.
     */
    where: MajorWhereUniqueInput
    /**
     * In case the Major found by the `where` argument doesn't exist, create a new Major with this data.
     */
    create: XOR<MajorCreateInput, MajorUncheckedCreateInput>
    /**
     * In case the Major was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
  }

  /**
   * Major delete
   */
  export type MajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter which Major to delete.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major deleteMany
   */
  export type MajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Majors to delete
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to delete.
     */
    limit?: number
  }

  /**
   * Major.users
   */
  export type Major$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Major without action
   */
  export type MajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    idUser: string | null
    fullName: string | null
    email: string | null
    password: string | null
    majorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    idUser: string | null
    fullName: string | null
    email: string | null
    password: string | null
    majorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    idUser: number
    fullName: number
    email: number
    password: number
    majorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    idUser?: true
    fullName?: true
    email?: true
    password?: true
    majorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    idUser?: true
    fullName?: true
    email?: true
    password?: true
    majorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    idUser?: true
    fullName?: true
    email?: true
    password?: true
    majorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    idUser: string
    fullName: string
    email: string
    password: string
    majorId: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    majorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    gameSessions?: boolean | Users$gameSessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    idUser?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    majorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "fullName" | "email" | "password" | "majorId" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    gameSessions?: boolean | Users$gameSessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      major: Prisma.$MajorPayload<ExtArgs>
      gameSessions: Prisma.$gameSessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUser: string
      fullName: string
      email: string
      password: string
      majorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `idUser`
     * const usersWithIdUserOnly = await prisma.users.findMany({ select: { idUser: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameSessions<T extends Users$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly idUser: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly majorId: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.gameSessions
   */
  export type Users$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    where?: gameSessionsWhereInput
    orderBy?: gameSessionsOrderByWithRelationInput | gameSessionsOrderByWithRelationInput[]
    cursor?: gameSessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionsScalarFieldEnum | GameSessionsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model gameSessions
   */

  export type AggregateGameSessions = {
    _count: GameSessionsCountAggregateOutputType | null
    _avg: GameSessionsAvgAggregateOutputType | null
    _sum: GameSessionsSumAggregateOutputType | null
    _min: GameSessionsMinAggregateOutputType | null
    _max: GameSessionsMaxAggregateOutputType | null
  }

  export type GameSessionsAvgAggregateOutputType = {
    score: number | null
  }

  export type GameSessionsSumAggregateOutputType = {
    score: number | null
  }

  export type GameSessionsMinAggregateOutputType = {
    id: string | null
    UserId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameSessionsMaxAggregateOutputType = {
    id: string | null
    UserId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameSessionsCountAggregateOutputType = {
    id: number
    UserId: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameSessionsAvgAggregateInputType = {
    score?: true
  }

  export type GameSessionsSumAggregateInputType = {
    score?: true
  }

  export type GameSessionsMinAggregateInputType = {
    id?: true
    UserId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameSessionsMaxAggregateInputType = {
    id?: true
    UserId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameSessionsCountAggregateInputType = {
    id?: true
    UserId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameSessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gameSessions to aggregate.
     */
    where?: gameSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameSessions to fetch.
     */
    orderBy?: gameSessionsOrderByWithRelationInput | gameSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gameSessions
    **/
    _count?: true | GameSessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionsMaxAggregateInputType
  }

  export type GetGameSessionsAggregateType<T extends GameSessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSessions[P]>
      : GetScalarType<T[P], AggregateGameSessions[P]>
  }




  export type gameSessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameSessionsWhereInput
    orderBy?: gameSessionsOrderByWithAggregationInput | gameSessionsOrderByWithAggregationInput[]
    by: GameSessionsScalarFieldEnum[] | GameSessionsScalarFieldEnum
    having?: gameSessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionsCountAggregateInputType | true
    _avg?: GameSessionsAvgAggregateInputType
    _sum?: GameSessionsSumAggregateInputType
    _min?: GameSessionsMinAggregateInputType
    _max?: GameSessionsMaxAggregateInputType
  }

  export type GameSessionsGroupByOutputType = {
    id: string
    UserId: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: GameSessionsCountAggregateOutputType | null
    _avg: GameSessionsAvgAggregateOutputType | null
    _sum: GameSessionsSumAggregateOutputType | null
    _min: GameSessionsMinAggregateOutputType | null
    _max: GameSessionsMaxAggregateOutputType | null
  }

  type GetGameSessionsGroupByPayload<T extends gameSessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionsGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionsGroupByOutputType[P]>
        }
      >
    >


  export type gameSessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSessions"]>



  export type gameSessionsSelectScalar = {
    id?: boolean
    UserId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type gameSessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "UserId" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["gameSessions"]>
  export type gameSessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $gameSessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gameSessions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      UserId: string
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameSessions"]>
    composites: {}
  }

  type gameSessionsGetPayload<S extends boolean | null | undefined | gameSessionsDefaultArgs> = $Result.GetResult<Prisma.$gameSessionsPayload, S>

  type gameSessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gameSessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSessionsCountAggregateInputType | true
    }

  export interface gameSessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gameSessions'], meta: { name: 'gameSessions' } }
    /**
     * Find zero or one GameSessions that matches the filter.
     * @param {gameSessionsFindUniqueArgs} args - Arguments to find a GameSessions
     * @example
     * // Get one GameSessions
     * const gameSessions = await prisma.gameSessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameSessionsFindUniqueArgs>(args: SelectSubset<T, gameSessionsFindUniqueArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gameSessionsFindUniqueOrThrowArgs} args - Arguments to find a GameSessions
     * @example
     * // Get one GameSessions
     * const gameSessions = await prisma.gameSessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameSessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, gameSessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameSessionsFindFirstArgs} args - Arguments to find a GameSessions
     * @example
     * // Get one GameSessions
     * const gameSessions = await prisma.gameSessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameSessionsFindFirstArgs>(args?: SelectSubset<T, gameSessionsFindFirstArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameSessionsFindFirstOrThrowArgs} args - Arguments to find a GameSessions
     * @example
     * // Get one GameSessions
     * const gameSessions = await prisma.gameSessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameSessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, gameSessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameSessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSessions.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionsWithIdOnly = await prisma.gameSessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gameSessionsFindManyArgs>(args?: SelectSubset<T, gameSessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSessions.
     * @param {gameSessionsCreateArgs} args - Arguments to create a GameSessions.
     * @example
     * // Create one GameSessions
     * const GameSessions = await prisma.gameSessions.create({
     *   data: {
     *     // ... data to create a GameSessions
     *   }
     * })
     * 
     */
    create<T extends gameSessionsCreateArgs>(args: SelectSubset<T, gameSessionsCreateArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSessions.
     * @param {gameSessionsCreateManyArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSessions = await prisma.gameSessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameSessionsCreateManyArgs>(args?: SelectSubset<T, gameSessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameSessions.
     * @param {gameSessionsDeleteArgs} args - Arguments to delete one GameSessions.
     * @example
     * // Delete one GameSessions
     * const GameSessions = await prisma.gameSessions.delete({
     *   where: {
     *     // ... filter to delete one GameSessions
     *   }
     * })
     * 
     */
    delete<T extends gameSessionsDeleteArgs>(args: SelectSubset<T, gameSessionsDeleteArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSessions.
     * @param {gameSessionsUpdateArgs} args - Arguments to update one GameSessions.
     * @example
     * // Update one GameSessions
     * const gameSessions = await prisma.gameSessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameSessionsUpdateArgs>(args: SelectSubset<T, gameSessionsUpdateArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSessions.
     * @param {gameSessionsDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameSessionsDeleteManyArgs>(args?: SelectSubset<T, gameSessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameSessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSessions = await prisma.gameSessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameSessionsUpdateManyArgs>(args: SelectSubset<T, gameSessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameSessions.
     * @param {gameSessionsUpsertArgs} args - Arguments to update or create a GameSessions.
     * @example
     * // Update or create a GameSessions
     * const gameSessions = await prisma.gameSessions.upsert({
     *   create: {
     *     // ... data to create a GameSessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSessions we want to update
     *   }
     * })
     */
    upsert<T extends gameSessionsUpsertArgs>(args: SelectSubset<T, gameSessionsUpsertArgs<ExtArgs>>): Prisma__gameSessionsClient<$Result.GetResult<Prisma.$gameSessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameSessionsCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSessions.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends gameSessionsCountArgs>(
      args?: Subset<T, gameSessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSessionsAggregateArgs>(args: Subset<T, GameSessionsAggregateArgs>): Prisma.PrismaPromise<GetGameSessionsAggregateType<T>>

    /**
     * Group by GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameSessionsGroupByArgs} args - Group by arguments.
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
      T extends gameSessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameSessionsGroupByArgs['orderBy'] }
        : { orderBy?: gameSessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gameSessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gameSessions model
   */
  readonly fields: gameSessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gameSessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameSessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the gameSessions model
   */
  interface gameSessionsFieldRefs {
    readonly id: FieldRef<"gameSessions", 'String'>
    readonly UserId: FieldRef<"gameSessions", 'String'>
    readonly score: FieldRef<"gameSessions", 'Int'>
    readonly createdAt: FieldRef<"gameSessions", 'DateTime'>
    readonly updatedAt: FieldRef<"gameSessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gameSessions findUnique
   */
  export type gameSessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * Filter, which gameSessions to fetch.
     */
    where: gameSessionsWhereUniqueInput
  }

  /**
   * gameSessions findUniqueOrThrow
   */
  export type gameSessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * Filter, which gameSessions to fetch.
     */
    where: gameSessionsWhereUniqueInput
  }

  /**
   * gameSessions findFirst
   */
  export type gameSessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * Filter, which gameSessions to fetch.
     */
    where?: gameSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameSessions to fetch.
     */
    orderBy?: gameSessionsOrderByWithRelationInput | gameSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gameSessions.
     */
    cursor?: gameSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameSessions.
     */
    distinct?: GameSessionsScalarFieldEnum | GameSessionsScalarFieldEnum[]
  }

  /**
   * gameSessions findFirstOrThrow
   */
  export type gameSessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * Filter, which gameSessions to fetch.
     */
    where?: gameSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameSessions to fetch.
     */
    orderBy?: gameSessionsOrderByWithRelationInput | gameSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gameSessions.
     */
    cursor?: gameSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameSessions.
     */
    distinct?: GameSessionsScalarFieldEnum | GameSessionsScalarFieldEnum[]
  }

  /**
   * gameSessions findMany
   */
  export type gameSessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * Filter, which gameSessions to fetch.
     */
    where?: gameSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameSessions to fetch.
     */
    orderBy?: gameSessionsOrderByWithRelationInput | gameSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gameSessions.
     */
    cursor?: gameSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameSessions.
     */
    distinct?: GameSessionsScalarFieldEnum | GameSessionsScalarFieldEnum[]
  }

  /**
   * gameSessions create
   */
  export type gameSessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a gameSessions.
     */
    data: XOR<gameSessionsCreateInput, gameSessionsUncheckedCreateInput>
  }

  /**
   * gameSessions createMany
   */
  export type gameSessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gameSessions.
     */
    data: gameSessionsCreateManyInput | gameSessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gameSessions update
   */
  export type gameSessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a gameSessions.
     */
    data: XOR<gameSessionsUpdateInput, gameSessionsUncheckedUpdateInput>
    /**
     * Choose, which gameSessions to update.
     */
    where: gameSessionsWhereUniqueInput
  }

  /**
   * gameSessions updateMany
   */
  export type gameSessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gameSessions.
     */
    data: XOR<gameSessionsUpdateManyMutationInput, gameSessionsUncheckedUpdateManyInput>
    /**
     * Filter which gameSessions to update
     */
    where?: gameSessionsWhereInput
    /**
     * Limit how many gameSessions to update.
     */
    limit?: number
  }

  /**
   * gameSessions upsert
   */
  export type gameSessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the gameSessions to update in case it exists.
     */
    where: gameSessionsWhereUniqueInput
    /**
     * In case the gameSessions found by the `where` argument doesn't exist, create a new gameSessions with this data.
     */
    create: XOR<gameSessionsCreateInput, gameSessionsUncheckedCreateInput>
    /**
     * In case the gameSessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameSessionsUpdateInput, gameSessionsUncheckedUpdateInput>
  }

  /**
   * gameSessions delete
   */
  export type gameSessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
    /**
     * Filter which gameSessions to delete.
     */
    where: gameSessionsWhereUniqueInput
  }

  /**
   * gameSessions deleteMany
   */
  export type gameSessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gameSessions to delete
     */
    where?: gameSessionsWhereInput
    /**
     * Limit how many gameSessions to delete.
     */
    limit?: number
  }

  /**
   * gameSessions without action
   */
  export type gameSessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameSessions
     */
    select?: gameSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameSessions
     */
    omit?: gameSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameSessionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MajorScalarFieldEnum: {
    idMajor: 'idMajor',
    name: 'name',
    code: 'code',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MajorScalarFieldEnum = (typeof MajorScalarFieldEnum)[keyof typeof MajorScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    idUser: 'idUser',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    majorId: 'majorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const GameSessionsScalarFieldEnum: {
    id: 'id',
    UserId: 'UserId',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameSessionsScalarFieldEnum = (typeof GameSessionsScalarFieldEnum)[keyof typeof GameSessionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const MajorOrderByRelevanceFieldEnum: {
    idMajor: 'idMajor',
    name: 'name',
    code: 'code',
    description: 'description'
  };

  export type MajorOrderByRelevanceFieldEnum = (typeof MajorOrderByRelevanceFieldEnum)[keyof typeof MajorOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    idUser: 'idUser',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    majorId: 'majorId'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const gameSessionsOrderByRelevanceFieldEnum: {
    id: 'id',
    UserId: 'UserId'
  };

  export type gameSessionsOrderByRelevanceFieldEnum = (typeof gameSessionsOrderByRelevanceFieldEnum)[keyof typeof gameSessionsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MajorWhereInput = {
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    idMajor?: StringFilter<"Major"> | string
    name?: StringFilter<"Major"> | string
    code?: StringFilter<"Major"> | string
    description?: StringFilter<"Major"> | string
    createdAt?: DateTimeFilter<"Major"> | Date | string
    updatedAt?: DateTimeFilter<"Major"> | Date | string
    users?: UsersListRelationFilter
  }

  export type MajorOrderByWithRelationInput = {
    idMajor?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByRelationAggregateInput
    _relevance?: MajorOrderByRelevanceInput
  }

  export type MajorWhereUniqueInput = Prisma.AtLeast<{
    idMajor?: string
    code?: string
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    name?: StringFilter<"Major"> | string
    description?: StringFilter<"Major"> | string
    createdAt?: DateTimeFilter<"Major"> | Date | string
    updatedAt?: DateTimeFilter<"Major"> | Date | string
    users?: UsersListRelationFilter
  }, "idMajor" | "code">

  export type MajorOrderByWithAggregationInput = {
    idMajor?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MajorCountOrderByAggregateInput
    _max?: MajorMaxOrderByAggregateInput
    _min?: MajorMinOrderByAggregateInput
  }

  export type MajorScalarWhereWithAggregatesInput = {
    AND?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    OR?: MajorScalarWhereWithAggregatesInput[]
    NOT?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    idMajor?: StringWithAggregatesFilter<"Major"> | string
    name?: StringWithAggregatesFilter<"Major"> | string
    code?: StringWithAggregatesFilter<"Major"> | string
    description?: StringWithAggregatesFilter<"Major"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Major"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Major"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    idUser?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    majorId?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    gameSessions?: GameSessionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    idUser?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    majorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    major?: MajorOrderByWithRelationInput
    gameSessions?: gameSessionsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    idUser?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    majorId?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    gameSessions?: GameSessionsListRelationFilter
  }, "idUser">

  export type UsersOrderByWithAggregationInput = {
    idUser?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    majorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    idUser?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    majorId?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type gameSessionsWhereInput = {
    AND?: gameSessionsWhereInput | gameSessionsWhereInput[]
    OR?: gameSessionsWhereInput[]
    NOT?: gameSessionsWhereInput | gameSessionsWhereInput[]
    id?: StringFilter<"gameSessions"> | string
    UserId?: StringFilter<"gameSessions"> | string
    score?: IntFilter<"gameSessions"> | number
    createdAt?: DateTimeFilter<"gameSessions"> | Date | string
    updatedAt?: DateTimeFilter<"gameSessions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type gameSessionsOrderByWithRelationInput = {
    id?: SortOrder
    UserId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: gameSessionsOrderByRelevanceInput
  }

  export type gameSessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: gameSessionsWhereInput | gameSessionsWhereInput[]
    OR?: gameSessionsWhereInput[]
    NOT?: gameSessionsWhereInput | gameSessionsWhereInput[]
    UserId?: StringFilter<"gameSessions"> | string
    score?: IntFilter<"gameSessions"> | number
    createdAt?: DateTimeFilter<"gameSessions"> | Date | string
    updatedAt?: DateTimeFilter<"gameSessions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type gameSessionsOrderByWithAggregationInput = {
    id?: SortOrder
    UserId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: gameSessionsCountOrderByAggregateInput
    _avg?: gameSessionsAvgOrderByAggregateInput
    _max?: gameSessionsMaxOrderByAggregateInput
    _min?: gameSessionsMinOrderByAggregateInput
    _sum?: gameSessionsSumOrderByAggregateInput
  }

  export type gameSessionsScalarWhereWithAggregatesInput = {
    AND?: gameSessionsScalarWhereWithAggregatesInput | gameSessionsScalarWhereWithAggregatesInput[]
    OR?: gameSessionsScalarWhereWithAggregatesInput[]
    NOT?: gameSessionsScalarWhereWithAggregatesInput | gameSessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"gameSessions"> | string
    UserId?: StringWithAggregatesFilter<"gameSessions"> | string
    score?: IntWithAggregatesFilter<"gameSessions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"gameSessions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"gameSessions"> | Date | string
  }

  export type MajorCreateInput = {
    idMajor?: string
    name: string
    code: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateInput = {
    idMajor?: string
    name: string
    code: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorUpdateInput = {
    idMajor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateInput = {
    idMajor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type MajorCreateManyInput = {
    idMajor?: string
    name: string
    code: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorUpdateManyMutationInput = {
    idMajor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorUncheckedUpdateManyInput = {
    idMajor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    major: MajorCreateNestedOneWithoutUsersInput
    gameSessions?: gameSessionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    majorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameSessions?: gameSessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneRequiredWithoutUsersNestedInput
    gameSessions?: gameSessionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSessions?: gameSessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    majorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsCreateInput = {
    id?: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutGameSessionsInput
  }

  export type gameSessionsUncheckedCreateInput = {
    id?: string
    UserId: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameSessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutGameSessionsNestedInput
  }

  export type gameSessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsCreateManyInput = {
    id?: string
    UserId: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameSessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
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

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorOrderByRelevanceInput = {
    fields: MajorOrderByRelevanceFieldEnum | MajorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MajorCountOrderByAggregateInput = {
    idMajor?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MajorMaxOrderByAggregateInput = {
    idMajor?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MajorMinOrderByAggregateInput = {
    idMajor?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
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

  export type MajorScalarRelationFilter = {
    is?: MajorWhereInput
    isNot?: MajorWhereInput
  }

  export type GameSessionsListRelationFilter = {
    every?: gameSessionsWhereInput
    some?: gameSessionsWhereInput
    none?: gameSessionsWhereInput
  }

  export type gameSessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    idUser?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    majorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    idUser?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    majorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    idUser?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    majorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type gameSessionsOrderByRelevanceInput = {
    fields: gameSessionsOrderByRelevanceFieldEnum | gameSessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gameSessionsCountOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameSessionsAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type gameSessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameSessionsMinOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameSessionsSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type UsersCreateNestedManyWithoutMajorInput = {
    create?: XOR<UsersCreateWithoutMajorInput, UsersUncheckedCreateWithoutMajorInput> | UsersCreateWithoutMajorInput[] | UsersUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutMajorInput | UsersCreateOrConnectWithoutMajorInput[]
    createMany?: UsersCreateManyMajorInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<UsersCreateWithoutMajorInput, UsersUncheckedCreateWithoutMajorInput> | UsersCreateWithoutMajorInput[] | UsersUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutMajorInput | UsersCreateOrConnectWithoutMajorInput[]
    createMany?: UsersCreateManyMajorInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateManyWithoutMajorNestedInput = {
    create?: XOR<UsersCreateWithoutMajorInput, UsersUncheckedCreateWithoutMajorInput> | UsersCreateWithoutMajorInput[] | UsersUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutMajorInput | UsersCreateOrConnectWithoutMajorInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutMajorInput | UsersUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: UsersCreateManyMajorInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutMajorInput | UsersUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutMajorInput | UsersUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<UsersCreateWithoutMajorInput, UsersUncheckedCreateWithoutMajorInput> | UsersCreateWithoutMajorInput[] | UsersUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutMajorInput | UsersCreateOrConnectWithoutMajorInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutMajorInput | UsersUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: UsersCreateManyMajorInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutMajorInput | UsersUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutMajorInput | UsersUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type MajorCreateNestedOneWithoutUsersInput = {
    create?: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutUsersInput
    connect?: MajorWhereUniqueInput
  }

  export type gameSessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<gameSessionsCreateWithoutUserInput, gameSessionsUncheckedCreateWithoutUserInput> | gameSessionsCreateWithoutUserInput[] | gameSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gameSessionsCreateOrConnectWithoutUserInput | gameSessionsCreateOrConnectWithoutUserInput[]
    createMany?: gameSessionsCreateManyUserInputEnvelope
    connect?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
  }

  export type gameSessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<gameSessionsCreateWithoutUserInput, gameSessionsUncheckedCreateWithoutUserInput> | gameSessionsCreateWithoutUserInput[] | gameSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gameSessionsCreateOrConnectWithoutUserInput | gameSessionsCreateOrConnectWithoutUserInput[]
    createMany?: gameSessionsCreateManyUserInputEnvelope
    connect?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
  }

  export type MajorUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutUsersInput
    upsert?: MajorUpsertWithoutUsersInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutUsersInput, MajorUpdateWithoutUsersInput>, MajorUncheckedUpdateWithoutUsersInput>
  }

  export type gameSessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<gameSessionsCreateWithoutUserInput, gameSessionsUncheckedCreateWithoutUserInput> | gameSessionsCreateWithoutUserInput[] | gameSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gameSessionsCreateOrConnectWithoutUserInput | gameSessionsCreateOrConnectWithoutUserInput[]
    upsert?: gameSessionsUpsertWithWhereUniqueWithoutUserInput | gameSessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: gameSessionsCreateManyUserInputEnvelope
    set?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    disconnect?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    delete?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    connect?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    update?: gameSessionsUpdateWithWhereUniqueWithoutUserInput | gameSessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: gameSessionsUpdateManyWithWhereWithoutUserInput | gameSessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: gameSessionsScalarWhereInput | gameSessionsScalarWhereInput[]
  }

  export type gameSessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<gameSessionsCreateWithoutUserInput, gameSessionsUncheckedCreateWithoutUserInput> | gameSessionsCreateWithoutUserInput[] | gameSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gameSessionsCreateOrConnectWithoutUserInput | gameSessionsCreateOrConnectWithoutUserInput[]
    upsert?: gameSessionsUpsertWithWhereUniqueWithoutUserInput | gameSessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: gameSessionsCreateManyUserInputEnvelope
    set?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    disconnect?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    delete?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    connect?: gameSessionsWhereUniqueInput | gameSessionsWhereUniqueInput[]
    update?: gameSessionsUpdateWithWhereUniqueWithoutUserInput | gameSessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: gameSessionsUpdateManyWithWhereWithoutUserInput | gameSessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: gameSessionsScalarWhereInput | gameSessionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<UsersCreateWithoutGameSessionsInput, UsersUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGameSessionsInput
    connect?: UsersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<UsersCreateWithoutGameSessionsInput, UsersUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGameSessionsInput
    upsert?: UsersUpsertWithoutGameSessionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGameSessionsInput, UsersUpdateWithoutGameSessionsInput>, UsersUncheckedUpdateWithoutGameSessionsInput>
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
    search?: string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UsersCreateWithoutMajorInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameSessions?: gameSessionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMajorInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameSessions?: gameSessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMajorInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMajorInput, UsersUncheckedCreateWithoutMajorInput>
  }

  export type UsersCreateManyMajorInputEnvelope = {
    data: UsersCreateManyMajorInput | UsersCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutMajorInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutMajorInput, UsersUncheckedUpdateWithoutMajorInput>
    create: XOR<UsersCreateWithoutMajorInput, UsersUncheckedCreateWithoutMajorInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutMajorInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutMajorInput, UsersUncheckedUpdateWithoutMajorInput>
  }

  export type UsersUpdateManyWithWhereWithoutMajorInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutMajorInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    idUser?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    majorId?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type MajorCreateWithoutUsersInput = {
    idMajor?: string
    name: string
    code: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorUncheckedCreateWithoutUsersInput = {
    idMajor?: string
    name: string
    code: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorCreateOrConnectWithoutUsersInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
  }

  export type gameSessionsCreateWithoutUserInput = {
    id?: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameSessionsUncheckedCreateWithoutUserInput = {
    id?: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameSessionsCreateOrConnectWithoutUserInput = {
    where: gameSessionsWhereUniqueInput
    create: XOR<gameSessionsCreateWithoutUserInput, gameSessionsUncheckedCreateWithoutUserInput>
  }

  export type gameSessionsCreateManyUserInputEnvelope = {
    data: gameSessionsCreateManyUserInput | gameSessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MajorUpsertWithoutUsersInput = {
    update: XOR<MajorUpdateWithoutUsersInput, MajorUncheckedUpdateWithoutUsersInput>
    create: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutUsersInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutUsersInput, MajorUncheckedUpdateWithoutUsersInput>
  }

  export type MajorUpdateWithoutUsersInput = {
    idMajor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorUncheckedUpdateWithoutUsersInput = {
    idMajor?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: gameSessionsWhereUniqueInput
    update: XOR<gameSessionsUpdateWithoutUserInput, gameSessionsUncheckedUpdateWithoutUserInput>
    create: XOR<gameSessionsCreateWithoutUserInput, gameSessionsUncheckedCreateWithoutUserInput>
  }

  export type gameSessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: gameSessionsWhereUniqueInput
    data: XOR<gameSessionsUpdateWithoutUserInput, gameSessionsUncheckedUpdateWithoutUserInput>
  }

  export type gameSessionsUpdateManyWithWhereWithoutUserInput = {
    where: gameSessionsScalarWhereInput
    data: XOR<gameSessionsUpdateManyMutationInput, gameSessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type gameSessionsScalarWhereInput = {
    AND?: gameSessionsScalarWhereInput | gameSessionsScalarWhereInput[]
    OR?: gameSessionsScalarWhereInput[]
    NOT?: gameSessionsScalarWhereInput | gameSessionsScalarWhereInput[]
    id?: StringFilter<"gameSessions"> | string
    UserId?: StringFilter<"gameSessions"> | string
    score?: IntFilter<"gameSessions"> | number
    createdAt?: DateTimeFilter<"gameSessions"> | Date | string
    updatedAt?: DateTimeFilter<"gameSessions"> | Date | string
  }

  export type UsersCreateWithoutGameSessionsInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    major: MajorCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutGameSessionsInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    majorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutGameSessionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGameSessionsInput, UsersUncheckedCreateWithoutGameSessionsInput>
  }

  export type UsersUpsertWithoutGameSessionsInput = {
    update: XOR<UsersUpdateWithoutGameSessionsInput, UsersUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<UsersCreateWithoutGameSessionsInput, UsersUncheckedCreateWithoutGameSessionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGameSessionsInput, UsersUncheckedUpdateWithoutGameSessionsInput>
  }

  export type UsersUpdateWithoutGameSessionsInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutGameSessionsInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyMajorInput = {
    idUser?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateWithoutMajorInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSessions?: gameSessionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMajorInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSessions?: gameSessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutMajorInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsCreateManyUserInput = {
    id?: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameSessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameSessionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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