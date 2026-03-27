
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
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model user_interests
 * 
 */
export type user_interests = $Result.DefaultSelection<Prisma.$user_interestsPayload>
/**
 * Model user_tasks
 * 
 */
export type user_tasks = $Result.DefaultSelection<Prisma.$user_tasksPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model shop_items
 * 
 */
export type shop_items = $Result.DefaultSelection<Prisma.$shop_itemsPayload>
/**
 * Model user_shop_items
 * 
 */
export type user_shop_items = $Result.DefaultSelection<Prisma.$user_shop_itemsPayload>
/**
 * Model user_endpoint_access
 * 
 */
export type user_endpoint_access = $Result.DefaultSelection<Prisma.$user_endpoint_accessPayload>
/**
 * Model challenge_submissions
 * 
 */
export type challenge_submissions = $Result.DefaultSelection<Prisma.$challenge_submissionsPayload>
/**
 * Model tickets
 * 
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>
/**
 * Model page_views
 * 
 */
export type page_views = $Result.DefaultSelection<Prisma.$page_viewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_interests`: Exposes CRUD operations for the **user_interests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_interests
    * const user_interests = await prisma.user_interests.findMany()
    * ```
    */
  get user_interests(): Prisma.user_interestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_tasks`: Exposes CRUD operations for the **user_tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tasks
    * const user_tasks = await prisma.user_tasks.findMany()
    * ```
    */
  get user_tasks(): Prisma.user_tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop_items`: Exposes CRUD operations for the **shop_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shop_items
    * const shop_items = await prisma.shop_items.findMany()
    * ```
    */
  get shop_items(): Prisma.shop_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_shop_items`: Exposes CRUD operations for the **user_shop_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_shop_items
    * const user_shop_items = await prisma.user_shop_items.findMany()
    * ```
    */
  get user_shop_items(): Prisma.user_shop_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_endpoint_access`: Exposes CRUD operations for the **user_endpoint_access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_endpoint_accesses
    * const user_endpoint_accesses = await prisma.user_endpoint_access.findMany()
    * ```
    */
  get user_endpoint_access(): Prisma.user_endpoint_accessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge_submissions`: Exposes CRUD operations for the **challenge_submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenge_submissions
    * const challenge_submissions = await prisma.challenge_submissions.findMany()
    * ```
    */
  get challenge_submissions(): Prisma.challenge_submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page_views`: Exposes CRUD operations for the **page_views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page_views
    * const page_views = await prisma.page_views.findMany()
    * ```
    */
  get page_views(): Prisma.page_viewsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    categories: 'categories',
    tasks: 'tasks',
    user_interests: 'user_interests',
    user_tasks: 'user_tasks',
    users: 'users',
    shop_items: 'shop_items',
    user_shop_items: 'user_shop_items',
    user_endpoint_access: 'user_endpoint_access',
    challenge_submissions: 'challenge_submissions',
    tickets: 'tickets',
    page_views: 'page_views'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "tasks" | "user_interests" | "user_tasks" | "users" | "shop_items" | "user_shop_items" | "user_endpoint_access" | "challenge_submissions" | "tickets" | "page_views"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      user_interests: {
        payload: Prisma.$user_interestsPayload<ExtArgs>
        fields: Prisma.user_interestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_interestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_interestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>
          }
          findFirst: {
            args: Prisma.user_interestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_interestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>
          }
          findMany: {
            args: Prisma.user_interestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>[]
          }
          create: {
            args: Prisma.user_interestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>
          }
          createMany: {
            args: Prisma.user_interestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_interestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>
          }
          update: {
            args: Prisma.user_interestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>
          }
          deleteMany: {
            args: Prisma.user_interestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_interestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_interestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_interestsPayload>
          }
          aggregate: {
            args: Prisma.User_interestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_interests>
          }
          groupBy: {
            args: Prisma.user_interestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_interestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_interestsCountArgs<ExtArgs>
            result: $Utils.Optional<User_interestsCountAggregateOutputType> | number
          }
        }
      }
      user_tasks: {
        payload: Prisma.$user_tasksPayload<ExtArgs>
        fields: Prisma.user_tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>
          }
          findFirst: {
            args: Prisma.user_tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>
          }
          findMany: {
            args: Prisma.user_tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>[]
          }
          create: {
            args: Prisma.user_tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>
          }
          createMany: {
            args: Prisma.user_tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>
          }
          update: {
            args: Prisma.user_tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>
          }
          deleteMany: {
            args: Prisma.user_tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tasksPayload>
          }
          aggregate: {
            args: Prisma.User_tasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tasks>
          }
          groupBy: {
            args: Prisma.user_tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tasksCountArgs<ExtArgs>
            result: $Utils.Optional<User_tasksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      shop_items: {
        payload: Prisma.$shop_itemsPayload<ExtArgs>
        fields: Prisma.shop_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shop_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shop_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>
          }
          findFirst: {
            args: Prisma.shop_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shop_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>
          }
          findMany: {
            args: Prisma.shop_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>[]
          }
          create: {
            args: Prisma.shop_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>
          }
          createMany: {
            args: Prisma.shop_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.shop_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>
          }
          update: {
            args: Prisma.shop_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>
          }
          deleteMany: {
            args: Prisma.shop_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shop_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.shop_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shop_itemsPayload>
          }
          aggregate: {
            args: Prisma.Shop_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop_items>
          }
          groupBy: {
            args: Prisma.shop_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shop_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.shop_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Shop_itemsCountAggregateOutputType> | number
          }
        }
      }
      user_shop_items: {
        payload: Prisma.$user_shop_itemsPayload<ExtArgs>
        fields: Prisma.user_shop_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_shop_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_shop_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>
          }
          findFirst: {
            args: Prisma.user_shop_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_shop_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>
          }
          findMany: {
            args: Prisma.user_shop_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>[]
          }
          create: {
            args: Prisma.user_shop_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>
          }
          createMany: {
            args: Prisma.user_shop_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_shop_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>
          }
          update: {
            args: Prisma.user_shop_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>
          }
          deleteMany: {
            args: Prisma.user_shop_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_shop_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_shop_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_shop_itemsPayload>
          }
          aggregate: {
            args: Prisma.User_shop_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_shop_items>
          }
          groupBy: {
            args: Prisma.user_shop_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_shop_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_shop_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<User_shop_itemsCountAggregateOutputType> | number
          }
        }
      }
      user_endpoint_access: {
        payload: Prisma.$user_endpoint_accessPayload<ExtArgs>
        fields: Prisma.user_endpoint_accessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_endpoint_accessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_endpoint_accessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>
          }
          findFirst: {
            args: Prisma.user_endpoint_accessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_endpoint_accessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>
          }
          findMany: {
            args: Prisma.user_endpoint_accessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>[]
          }
          create: {
            args: Prisma.user_endpoint_accessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>
          }
          createMany: {
            args: Prisma.user_endpoint_accessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_endpoint_accessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>
          }
          update: {
            args: Prisma.user_endpoint_accessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>
          }
          deleteMany: {
            args: Prisma.user_endpoint_accessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_endpoint_accessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_endpoint_accessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_endpoint_accessPayload>
          }
          aggregate: {
            args: Prisma.User_endpoint_accessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_endpoint_access>
          }
          groupBy: {
            args: Prisma.user_endpoint_accessGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_endpoint_accessGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_endpoint_accessCountArgs<ExtArgs>
            result: $Utils.Optional<User_endpoint_accessCountAggregateOutputType> | number
          }
        }
      }
      challenge_submissions: {
        payload: Prisma.$challenge_submissionsPayload<ExtArgs>
        fields: Prisma.challenge_submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challenge_submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challenge_submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          findFirst: {
            args: Prisma.challenge_submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challenge_submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          findMany: {
            args: Prisma.challenge_submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>[]
          }
          create: {
            args: Prisma.challenge_submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          createMany: {
            args: Prisma.challenge_submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.challenge_submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          update: {
            args: Prisma.challenge_submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          deleteMany: {
            args: Prisma.challenge_submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challenge_submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.challenge_submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          aggregate: {
            args: Prisma.Challenge_submissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge_submissions>
          }
          groupBy: {
            args: Prisma.challenge_submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Challenge_submissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.challenge_submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Challenge_submissionsCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      page_views: {
        payload: Prisma.$page_viewsPayload<ExtArgs>
        fields: Prisma.page_viewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.page_viewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.page_viewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>
          }
          findFirst: {
            args: Prisma.page_viewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.page_viewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>
          }
          findMany: {
            args: Prisma.page_viewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>[]
          }
          create: {
            args: Prisma.page_viewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>
          }
          createMany: {
            args: Prisma.page_viewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.page_viewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>
          }
          update: {
            args: Prisma.page_viewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>
          }
          deleteMany: {
            args: Prisma.page_viewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.page_viewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.page_viewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$page_viewsPayload>
          }
          aggregate: {
            args: Prisma.Page_viewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage_views>
          }
          groupBy: {
            args: Prisma.page_viewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Page_viewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.page_viewsCountArgs<ExtArgs>
            result: $Utils.Optional<Page_viewsCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    tasks?: tasksOmit
    user_interests?: user_interestsOmit
    user_tasks?: user_tasksOmit
    users?: usersOmit
    shop_items?: shop_itemsOmit
    user_shop_items?: user_shop_itemsOmit
    user_endpoint_access?: user_endpoint_accessOmit
    challenge_submissions?: challenge_submissionsOmit
    tickets?: ticketsOmit
    page_views?: page_viewsOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    tasks: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CategoriesCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    user_tasks: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_tasks?: boolean | TasksCountOutputTypeCountUser_tasksArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountUser_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tasksWhereInput
  }


  /**
   * Count Type User_tasksCountOutputType
   */

  export type User_tasksCountOutputType = {
    challenge_submissions: number
  }

  export type User_tasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge_submissions?: boolean | User_tasksCountOutputTypeCountChallenge_submissionsArgs
  }

  // Custom InputTypes
  /**
   * User_tasksCountOutputType without action
   */
  export type User_tasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_tasksCountOutputType
     */
    select?: User_tasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_tasksCountOutputType without action
   */
  export type User_tasksCountOutputTypeCountChallenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_submissionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    categories_categories_created_byTousers: number
    categories_categories_updated_byTousers: number
    tasks_tasks_created_byTousers: number
    tasks_tasks_updated_byTousers: number
    tickets: number
    user_endpoint_access: number
    user_shop_items: number
    user_tasks: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_categories_created_byTousers?: boolean | UsersCountOutputTypeCountCategories_categories_created_byTousersArgs
    categories_categories_updated_byTousers?: boolean | UsersCountOutputTypeCountCategories_categories_updated_byTousersArgs
    tasks_tasks_created_byTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_created_byTousersArgs
    tasks_tasks_updated_byTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_updated_byTousersArgs
    tickets?: boolean | UsersCountOutputTypeCountTicketsArgs
    user_endpoint_access?: boolean | UsersCountOutputTypeCountUser_endpoint_accessArgs
    user_shop_items?: boolean | UsersCountOutputTypeCountUser_shop_itemsArgs
    user_tasks?: boolean | UsersCountOutputTypeCountUser_tasksArgs
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
  export type UsersCountOutputTypeCountCategories_categories_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategories_categories_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_endpoint_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_endpoint_accessWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_shop_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_shop_itemsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tasksWhereInput
  }


  /**
   * Count Type Shop_itemsCountOutputType
   */

  export type Shop_itemsCountOutputType = {
    user_shop_items: number
  }

  export type Shop_itemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_shop_items?: boolean | Shop_itemsCountOutputTypeCountUser_shop_itemsArgs
  }

  // Custom InputTypes
  /**
   * Shop_itemsCountOutputType without action
   */
  export type Shop_itemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_itemsCountOutputType
     */
    select?: Shop_itemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Shop_itemsCountOutputType without action
   */
  export type Shop_itemsCountOutputTypeCountUser_shop_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_shop_itemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    uuid: string | null
    type: string | null
    name: string | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    uuid: string | null
    type: string | null
    name: string | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    uuid: number
    type: number
    name: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    uuid?: true
    type?: true
    name?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type CategoriesMaxAggregateInputType = {
    uuid?: true
    type?: true
    name?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type CategoriesCountAggregateInputType = {
    uuid?: true
    type?: true
    name?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    uuid: string
    type: string
    name: string
    created_at: Date
    created_by: string
    updated_at: Date | null
    updated_by: string | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    type?: boolean
    name?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | categories$users_categories_updated_byTousersArgs<ExtArgs>
    tasks?: boolean | categories$tasksArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    uuid?: boolean
    type?: boolean
    name?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "type" | "name" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | categories$users_categories_updated_byTousersArgs<ExtArgs>
    tasks?: boolean | categories$tasksArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      users_categories_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_categories_updated_byTousers: Prisma.$usersPayload<ExtArgs> | null
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      type: string
      name: string
      created_at: Date
      created_by: string
      updated_at: Date | null
      updated_by: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const categoriesWithUuidOnly = await prisma.categories.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_categories_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_categories_updated_byTousers<T extends categories$users_categories_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, categories$users_categories_updated_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends categories$tasksArgs<ExtArgs> = {}>(args?: Subset<T, categories$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly uuid: FieldRef<"categories", 'String'>
    readonly type: FieldRef<"categories", 'String'>
    readonly name: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly created_by: FieldRef<"categories", 'String'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
    readonly updated_by: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.users_categories_updated_byTousers
   */
  export type categories$users_categories_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * categories.tasks
   */
  export type categories$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    xp: number | null
    coin: number | null
  }

  export type TasksSumAggregateOutputType = {
    xp: number | null
    coin: number | null
  }

  export type TasksMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    xp: number | null
    coin: number | null
    difficulty: string | null
    categories_id: string | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
  }

  export type TasksMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    xp: number | null
    coin: number | null
    difficulty: string | null
    categories_id: string | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
  }

  export type TasksCountAggregateOutputType = {
    uuid: number
    name: number
    description: number
    xp: number
    coin: number
    difficulty: number
    categories_id: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    xp?: true
    coin?: true
  }

  export type TasksSumAggregateInputType = {
    xp?: true
    coin?: true
  }

  export type TasksMinAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    xp?: true
    coin?: true
    difficulty?: true
    categories_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type TasksMaxAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    xp?: true
    coin?: true
    difficulty?: true
    categories_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type TasksCountAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    xp?: true
    coin?: true
    difficulty?: true
    categories_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    uuid: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty: string
    categories_id: string
    created_at: Date
    created_by: string
    updated_at: Date | null
    updated_by: string | null
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    xp?: boolean
    coin?: boolean
    difficulty?: boolean
    categories_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_tasks_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    user_tasks?: boolean | tasks$user_tasksArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>



  export type tasksSelectScalar = {
    uuid?: boolean
    name?: boolean
    description?: boolean
    xp?: boolean
    coin?: boolean
    difficulty?: boolean
    categories_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "description" | "xp" | "coin" | "difficulty" | "categories_id" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_tasks_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    user_tasks?: boolean | tasks$user_tasksArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      users_tasks_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_tasks_updated_byTousers: Prisma.$usersPayload<ExtArgs> | null
      categories: Prisma.$categoriesPayload<ExtArgs>
      user_tasks: Prisma.$user_tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      description: string
      xp: number
      coin: number
      difficulty: string
      categories_id: string
      created_at: Date
      created_by: string
      updated_at: Date | null
      updated_by: string | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const tasksWithUuidOnly = await prisma.tasks.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
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
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_tasks_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_tasks_updated_byTousers<T extends tasks$users_tasks_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$users_tasks_updated_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_tasks<T extends tasks$user_tasksArgs<ExtArgs> = {}>(args?: Subset<T, tasks$user_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly uuid: FieldRef<"tasks", 'String'>
    readonly name: FieldRef<"tasks", 'String'>
    readonly description: FieldRef<"tasks", 'String'>
    readonly xp: FieldRef<"tasks", 'Int'>
    readonly coin: FieldRef<"tasks", 'Int'>
    readonly difficulty: FieldRef<"tasks", 'String'>
    readonly categories_id: FieldRef<"tasks", 'String'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly created_by: FieldRef<"tasks", 'String'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_by: FieldRef<"tasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.users_tasks_updated_byTousers
   */
  export type tasks$users_tasks_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks.user_tasks
   */
  export type tasks$user_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    where?: user_tasksWhereInput
    orderBy?: user_tasksOrderByWithRelationInput | user_tasksOrderByWithRelationInput[]
    cursor?: user_tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tasksScalarFieldEnum | User_tasksScalarFieldEnum[]
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model user_interests
   */

  export type AggregateUser_interests = {
    _count: User_interestsCountAggregateOutputType | null
    _min: User_interestsMinAggregateOutputType | null
    _max: User_interestsMaxAggregateOutputType | null
  }

  export type User_interestsMinAggregateOutputType = {
    uuid: string | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
  }

  export type User_interestsMaxAggregateOutputType = {
    uuid: string | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
  }

  export type User_interestsCountAggregateOutputType = {
    uuid: number
    user_id: number
    category_id: number
    created_at: number
    _all: number
  }


  export type User_interestsMinAggregateInputType = {
    uuid?: true
    user_id?: true
    category_id?: true
    created_at?: true
  }

  export type User_interestsMaxAggregateInputType = {
    uuid?: true
    user_id?: true
    category_id?: true
    created_at?: true
  }

  export type User_interestsCountAggregateInputType = {
    uuid?: true
    user_id?: true
    category_id?: true
    created_at?: true
    _all?: true
  }

  export type User_interestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_interests to aggregate.
     */
    where?: user_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_interests to fetch.
     */
    orderBy?: user_interestsOrderByWithRelationInput | user_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_interests
    **/
    _count?: true | User_interestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_interestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_interestsMaxAggregateInputType
  }

  export type GetUser_interestsAggregateType<T extends User_interestsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_interests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_interests[P]>
      : GetScalarType<T[P], AggregateUser_interests[P]>
  }




  export type user_interestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_interestsWhereInput
    orderBy?: user_interestsOrderByWithAggregationInput | user_interestsOrderByWithAggregationInput[]
    by: User_interestsScalarFieldEnum[] | User_interestsScalarFieldEnum
    having?: user_interestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_interestsCountAggregateInputType | true
    _min?: User_interestsMinAggregateInputType
    _max?: User_interestsMaxAggregateInputType
  }

  export type User_interestsGroupByOutputType = {
    uuid: string
    user_id: string
    category_id: string
    created_at: Date
    _count: User_interestsCountAggregateOutputType | null
    _min: User_interestsMinAggregateOutputType | null
    _max: User_interestsMaxAggregateOutputType | null
  }

  type GetUser_interestsGroupByPayload<T extends user_interestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_interestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_interestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_interestsGroupByOutputType[P]>
            : GetScalarType<T[P], User_interestsGroupByOutputType[P]>
        }
      >
    >


  export type user_interestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_interests"]>



  export type user_interestsSelectScalar = {
    uuid?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
  }

  export type user_interestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "user_id" | "category_id" | "created_at", ExtArgs["result"]["user_interests"]>

  export type $user_interestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_interests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      user_id: string
      category_id: string
      created_at: Date
    }, ExtArgs["result"]["user_interests"]>
    composites: {}
  }

  type user_interestsGetPayload<S extends boolean | null | undefined | user_interestsDefaultArgs> = $Result.GetResult<Prisma.$user_interestsPayload, S>

  type user_interestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_interestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_interestsCountAggregateInputType | true
    }

  export interface user_interestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_interests'], meta: { name: 'user_interests' } }
    /**
     * Find zero or one User_interests that matches the filter.
     * @param {user_interestsFindUniqueArgs} args - Arguments to find a User_interests
     * @example
     * // Get one User_interests
     * const user_interests = await prisma.user_interests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_interestsFindUniqueArgs>(args: SelectSubset<T, user_interestsFindUniqueArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_interests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_interestsFindUniqueOrThrowArgs} args - Arguments to find a User_interests
     * @example
     * // Get one User_interests
     * const user_interests = await prisma.user_interests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_interestsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_interestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_interestsFindFirstArgs} args - Arguments to find a User_interests
     * @example
     * // Get one User_interests
     * const user_interests = await prisma.user_interests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_interestsFindFirstArgs>(args?: SelectSubset<T, user_interestsFindFirstArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_interests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_interestsFindFirstOrThrowArgs} args - Arguments to find a User_interests
     * @example
     * // Get one User_interests
     * const user_interests = await prisma.user_interests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_interestsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_interestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_interestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_interests
     * const user_interests = await prisma.user_interests.findMany()
     * 
     * // Get first 10 User_interests
     * const user_interests = await prisma.user_interests.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const user_interestsWithUuidOnly = await prisma.user_interests.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends user_interestsFindManyArgs>(args?: SelectSubset<T, user_interestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_interests.
     * @param {user_interestsCreateArgs} args - Arguments to create a User_interests.
     * @example
     * // Create one User_interests
     * const User_interests = await prisma.user_interests.create({
     *   data: {
     *     // ... data to create a User_interests
     *   }
     * })
     * 
     */
    create<T extends user_interestsCreateArgs>(args: SelectSubset<T, user_interestsCreateArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_interests.
     * @param {user_interestsCreateManyArgs} args - Arguments to create many User_interests.
     * @example
     * // Create many User_interests
     * const user_interests = await prisma.user_interests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_interestsCreateManyArgs>(args?: SelectSubset<T, user_interestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_interests.
     * @param {user_interestsDeleteArgs} args - Arguments to delete one User_interests.
     * @example
     * // Delete one User_interests
     * const User_interests = await prisma.user_interests.delete({
     *   where: {
     *     // ... filter to delete one User_interests
     *   }
     * })
     * 
     */
    delete<T extends user_interestsDeleteArgs>(args: SelectSubset<T, user_interestsDeleteArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_interests.
     * @param {user_interestsUpdateArgs} args - Arguments to update one User_interests.
     * @example
     * // Update one User_interests
     * const user_interests = await prisma.user_interests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_interestsUpdateArgs>(args: SelectSubset<T, user_interestsUpdateArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_interests.
     * @param {user_interestsDeleteManyArgs} args - Arguments to filter User_interests to delete.
     * @example
     * // Delete a few User_interests
     * const { count } = await prisma.user_interests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_interestsDeleteManyArgs>(args?: SelectSubset<T, user_interestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_interestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_interests
     * const user_interests = await prisma.user_interests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_interestsUpdateManyArgs>(args: SelectSubset<T, user_interestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_interests.
     * @param {user_interestsUpsertArgs} args - Arguments to update or create a User_interests.
     * @example
     * // Update or create a User_interests
     * const user_interests = await prisma.user_interests.upsert({
     *   create: {
     *     // ... data to create a User_interests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_interests we want to update
     *   }
     * })
     */
    upsert<T extends user_interestsUpsertArgs>(args: SelectSubset<T, user_interestsUpsertArgs<ExtArgs>>): Prisma__user_interestsClient<$Result.GetResult<Prisma.$user_interestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_interestsCountArgs} args - Arguments to filter User_interests to count.
     * @example
     * // Count the number of User_interests
     * const count = await prisma.user_interests.count({
     *   where: {
     *     // ... the filter for the User_interests we want to count
     *   }
     * })
    **/
    count<T extends user_interestsCountArgs>(
      args?: Subset<T, user_interestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_interestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_interestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_interestsAggregateArgs>(args: Subset<T, User_interestsAggregateArgs>): Prisma.PrismaPromise<GetUser_interestsAggregateType<T>>

    /**
     * Group by User_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_interestsGroupByArgs} args - Group by arguments.
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
      T extends user_interestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_interestsGroupByArgs['orderBy'] }
        : { orderBy?: user_interestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_interestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_interestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_interests model
   */
  readonly fields: user_interestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_interests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_interestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user_interests model
   */
  interface user_interestsFieldRefs {
    readonly uuid: FieldRef<"user_interests", 'String'>
    readonly user_id: FieldRef<"user_interests", 'String'>
    readonly category_id: FieldRef<"user_interests", 'String'>
    readonly created_at: FieldRef<"user_interests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_interests findUnique
   */
  export type user_interestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * Filter, which user_interests to fetch.
     */
    where: user_interestsWhereUniqueInput
  }

  /**
   * user_interests findUniqueOrThrow
   */
  export type user_interestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * Filter, which user_interests to fetch.
     */
    where: user_interestsWhereUniqueInput
  }

  /**
   * user_interests findFirst
   */
  export type user_interestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * Filter, which user_interests to fetch.
     */
    where?: user_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_interests to fetch.
     */
    orderBy?: user_interestsOrderByWithRelationInput | user_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_interests.
     */
    cursor?: user_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_interests.
     */
    distinct?: User_interestsScalarFieldEnum | User_interestsScalarFieldEnum[]
  }

  /**
   * user_interests findFirstOrThrow
   */
  export type user_interestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * Filter, which user_interests to fetch.
     */
    where?: user_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_interests to fetch.
     */
    orderBy?: user_interestsOrderByWithRelationInput | user_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_interests.
     */
    cursor?: user_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_interests.
     */
    distinct?: User_interestsScalarFieldEnum | User_interestsScalarFieldEnum[]
  }

  /**
   * user_interests findMany
   */
  export type user_interestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * Filter, which user_interests to fetch.
     */
    where?: user_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_interests to fetch.
     */
    orderBy?: user_interestsOrderByWithRelationInput | user_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_interests.
     */
    cursor?: user_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_interests.
     */
    skip?: number
    distinct?: User_interestsScalarFieldEnum | User_interestsScalarFieldEnum[]
  }

  /**
   * user_interests create
   */
  export type user_interestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * The data needed to create a user_interests.
     */
    data: XOR<user_interestsCreateInput, user_interestsUncheckedCreateInput>
  }

  /**
   * user_interests createMany
   */
  export type user_interestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_interests.
     */
    data: user_interestsCreateManyInput | user_interestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_interests update
   */
  export type user_interestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * The data needed to update a user_interests.
     */
    data: XOR<user_interestsUpdateInput, user_interestsUncheckedUpdateInput>
    /**
     * Choose, which user_interests to update.
     */
    where: user_interestsWhereUniqueInput
  }

  /**
   * user_interests updateMany
   */
  export type user_interestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_interests.
     */
    data: XOR<user_interestsUpdateManyMutationInput, user_interestsUncheckedUpdateManyInput>
    /**
     * Filter which user_interests to update
     */
    where?: user_interestsWhereInput
    /**
     * Limit how many user_interests to update.
     */
    limit?: number
  }

  /**
   * user_interests upsert
   */
  export type user_interestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * The filter to search for the user_interests to update in case it exists.
     */
    where: user_interestsWhereUniqueInput
    /**
     * In case the user_interests found by the `where` argument doesn't exist, create a new user_interests with this data.
     */
    create: XOR<user_interestsCreateInput, user_interestsUncheckedCreateInput>
    /**
     * In case the user_interests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_interestsUpdateInput, user_interestsUncheckedUpdateInput>
  }

  /**
   * user_interests delete
   */
  export type user_interestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
    /**
     * Filter which user_interests to delete.
     */
    where: user_interestsWhereUniqueInput
  }

  /**
   * user_interests deleteMany
   */
  export type user_interestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_interests to delete
     */
    where?: user_interestsWhereInput
    /**
     * Limit how many user_interests to delete.
     */
    limit?: number
  }

  /**
   * user_interests without action
   */
  export type user_interestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_interests
     */
    select?: user_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_interests
     */
    omit?: user_interestsOmit<ExtArgs> | null
  }


  /**
   * Model user_tasks
   */

  export type AggregateUser_tasks = {
    _count: User_tasksCountAggregateOutputType | null
    _avg: User_tasksAvgAggregateOutputType | null
    _sum: User_tasksSumAggregateOutputType | null
    _min: User_tasksMinAggregateOutputType | null
    _max: User_tasksMaxAggregateOutputType | null
  }

  export type User_tasksAvgAggregateOutputType = {
    status: number | null
  }

  export type User_tasksSumAggregateOutputType = {
    status: number | null
  }

  export type User_tasksMinAggregateOutputType = {
    uuid: string | null
    status: number | null
    task_id: string | null
    user_id: string | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type User_tasksMaxAggregateOutputType = {
    uuid: string | null
    status: number | null
    task_id: string | null
    user_id: string | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type User_tasksCountAggregateOutputType = {
    uuid: number
    status: number
    task_id: number
    user_id: number
    created_at: number
    completed_at: number
    _all: number
  }


  export type User_tasksAvgAggregateInputType = {
    status?: true
  }

  export type User_tasksSumAggregateInputType = {
    status?: true
  }

  export type User_tasksMinAggregateInputType = {
    uuid?: true
    status?: true
    task_id?: true
    user_id?: true
    created_at?: true
    completed_at?: true
  }

  export type User_tasksMaxAggregateInputType = {
    uuid?: true
    status?: true
    task_id?: true
    user_id?: true
    created_at?: true
    completed_at?: true
  }

  export type User_tasksCountAggregateInputType = {
    uuid?: true
    status?: true
    task_id?: true
    user_id?: true
    created_at?: true
    completed_at?: true
    _all?: true
  }

  export type User_tasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tasks to aggregate.
     */
    where?: user_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tasks to fetch.
     */
    orderBy?: user_tasksOrderByWithRelationInput | user_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tasks
    **/
    _count?: true | User_tasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tasksMaxAggregateInputType
  }

  export type GetUser_tasksAggregateType<T extends User_tasksAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tasks[P]>
      : GetScalarType<T[P], AggregateUser_tasks[P]>
  }




  export type user_tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tasksWhereInput
    orderBy?: user_tasksOrderByWithAggregationInput | user_tasksOrderByWithAggregationInput[]
    by: User_tasksScalarFieldEnum[] | User_tasksScalarFieldEnum
    having?: user_tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tasksCountAggregateInputType | true
    _avg?: User_tasksAvgAggregateInputType
    _sum?: User_tasksSumAggregateInputType
    _min?: User_tasksMinAggregateInputType
    _max?: User_tasksMaxAggregateInputType
  }

  export type User_tasksGroupByOutputType = {
    uuid: string
    status: number
    task_id: string
    user_id: string
    created_at: Date
    completed_at: Date | null
    _count: User_tasksCountAggregateOutputType | null
    _avg: User_tasksAvgAggregateOutputType | null
    _sum: User_tasksSumAggregateOutputType | null
    _min: User_tasksMinAggregateOutputType | null
    _max: User_tasksMaxAggregateOutputType | null
  }

  type GetUser_tasksGroupByPayload<T extends user_tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tasksGroupByOutputType[P]>
            : GetScalarType<T[P], User_tasksGroupByOutputType[P]>
        }
      >
    >


  export type user_tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    status?: boolean
    task_id?: boolean
    user_id?: boolean
    created_at?: boolean
    completed_at?: boolean
    challenge_submissions?: boolean | user_tasks$challenge_submissionsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    _count?: boolean | User_tasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_tasks"]>



  export type user_tasksSelectScalar = {
    uuid?: boolean
    status?: boolean
    task_id?: boolean
    user_id?: boolean
    created_at?: boolean
    completed_at?: boolean
  }

  export type user_tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "status" | "task_id" | "user_id" | "created_at" | "completed_at", ExtArgs["result"]["user_tasks"]>
  export type user_tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge_submissions?: boolean | user_tasks$challenge_submissionsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    _count?: boolean | User_tasksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $user_tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tasks"
    objects: {
      challenge_submissions: Prisma.$challenge_submissionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      tasks: Prisma.$tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      status: number
      task_id: string
      user_id: string
      created_at: Date
      completed_at: Date | null
    }, ExtArgs["result"]["user_tasks"]>
    composites: {}
  }

  type user_tasksGetPayload<S extends boolean | null | undefined | user_tasksDefaultArgs> = $Result.GetResult<Prisma.$user_tasksPayload, S>

  type user_tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tasksCountAggregateInputType | true
    }

  export interface user_tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tasks'], meta: { name: 'user_tasks' } }
    /**
     * Find zero or one User_tasks that matches the filter.
     * @param {user_tasksFindUniqueArgs} args - Arguments to find a User_tasks
     * @example
     * // Get one User_tasks
     * const user_tasks = await prisma.user_tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tasksFindUniqueArgs>(args: SelectSubset<T, user_tasksFindUniqueArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tasksFindUniqueOrThrowArgs} args - Arguments to find a User_tasks
     * @example
     * // Get one User_tasks
     * const user_tasks = await prisma.user_tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tasksFindFirstArgs} args - Arguments to find a User_tasks
     * @example
     * // Get one User_tasks
     * const user_tasks = await prisma.user_tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tasksFindFirstArgs>(args?: SelectSubset<T, user_tasksFindFirstArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tasksFindFirstOrThrowArgs} args - Arguments to find a User_tasks
     * @example
     * // Get one User_tasks
     * const user_tasks = await prisma.user_tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tasks
     * const user_tasks = await prisma.user_tasks.findMany()
     * 
     * // Get first 10 User_tasks
     * const user_tasks = await prisma.user_tasks.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const user_tasksWithUuidOnly = await prisma.user_tasks.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends user_tasksFindManyArgs>(args?: SelectSubset<T, user_tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tasks.
     * @param {user_tasksCreateArgs} args - Arguments to create a User_tasks.
     * @example
     * // Create one User_tasks
     * const User_tasks = await prisma.user_tasks.create({
     *   data: {
     *     // ... data to create a User_tasks
     *   }
     * })
     * 
     */
    create<T extends user_tasksCreateArgs>(args: SelectSubset<T, user_tasksCreateArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tasks.
     * @param {user_tasksCreateManyArgs} args - Arguments to create many User_tasks.
     * @example
     * // Create many User_tasks
     * const user_tasks = await prisma.user_tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tasksCreateManyArgs>(args?: SelectSubset<T, user_tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tasks.
     * @param {user_tasksDeleteArgs} args - Arguments to delete one User_tasks.
     * @example
     * // Delete one User_tasks
     * const User_tasks = await prisma.user_tasks.delete({
     *   where: {
     *     // ... filter to delete one User_tasks
     *   }
     * })
     * 
     */
    delete<T extends user_tasksDeleteArgs>(args: SelectSubset<T, user_tasksDeleteArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tasks.
     * @param {user_tasksUpdateArgs} args - Arguments to update one User_tasks.
     * @example
     * // Update one User_tasks
     * const user_tasks = await prisma.user_tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tasksUpdateArgs>(args: SelectSubset<T, user_tasksUpdateArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tasks.
     * @param {user_tasksDeleteManyArgs} args - Arguments to filter User_tasks to delete.
     * @example
     * // Delete a few User_tasks
     * const { count } = await prisma.user_tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tasksDeleteManyArgs>(args?: SelectSubset<T, user_tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tasks
     * const user_tasks = await prisma.user_tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tasksUpdateManyArgs>(args: SelectSubset<T, user_tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tasks.
     * @param {user_tasksUpsertArgs} args - Arguments to update or create a User_tasks.
     * @example
     * // Update or create a User_tasks
     * const user_tasks = await prisma.user_tasks.upsert({
     *   create: {
     *     // ... data to create a User_tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tasks we want to update
     *   }
     * })
     */
    upsert<T extends user_tasksUpsertArgs>(args: SelectSubset<T, user_tasksUpsertArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tasksCountArgs} args - Arguments to filter User_tasks to count.
     * @example
     * // Count the number of User_tasks
     * const count = await prisma.user_tasks.count({
     *   where: {
     *     // ... the filter for the User_tasks we want to count
     *   }
     * })
    **/
    count<T extends user_tasksCountArgs>(
      args?: Subset<T, user_tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_tasksAggregateArgs>(args: Subset<T, User_tasksAggregateArgs>): Prisma.PrismaPromise<GetUser_tasksAggregateType<T>>

    /**
     * Group by User_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tasksGroupByArgs} args - Group by arguments.
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
      T extends user_tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tasksGroupByArgs['orderBy'] }
        : { orderBy?: user_tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tasks model
   */
  readonly fields: user_tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge_submissions<T extends user_tasks$challenge_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, user_tasks$challenge_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_tasks model
   */
  interface user_tasksFieldRefs {
    readonly uuid: FieldRef<"user_tasks", 'String'>
    readonly status: FieldRef<"user_tasks", 'Int'>
    readonly task_id: FieldRef<"user_tasks", 'String'>
    readonly user_id: FieldRef<"user_tasks", 'String'>
    readonly created_at: FieldRef<"user_tasks", 'DateTime'>
    readonly completed_at: FieldRef<"user_tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_tasks findUnique
   */
  export type user_tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * Filter, which user_tasks to fetch.
     */
    where: user_tasksWhereUniqueInput
  }

  /**
   * user_tasks findUniqueOrThrow
   */
  export type user_tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * Filter, which user_tasks to fetch.
     */
    where: user_tasksWhereUniqueInput
  }

  /**
   * user_tasks findFirst
   */
  export type user_tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * Filter, which user_tasks to fetch.
     */
    where?: user_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tasks to fetch.
     */
    orderBy?: user_tasksOrderByWithRelationInput | user_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tasks.
     */
    cursor?: user_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tasks.
     */
    distinct?: User_tasksScalarFieldEnum | User_tasksScalarFieldEnum[]
  }

  /**
   * user_tasks findFirstOrThrow
   */
  export type user_tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * Filter, which user_tasks to fetch.
     */
    where?: user_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tasks to fetch.
     */
    orderBy?: user_tasksOrderByWithRelationInput | user_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tasks.
     */
    cursor?: user_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tasks.
     */
    distinct?: User_tasksScalarFieldEnum | User_tasksScalarFieldEnum[]
  }

  /**
   * user_tasks findMany
   */
  export type user_tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * Filter, which user_tasks to fetch.
     */
    where?: user_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tasks to fetch.
     */
    orderBy?: user_tasksOrderByWithRelationInput | user_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tasks.
     */
    cursor?: user_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tasks.
     */
    skip?: number
    distinct?: User_tasksScalarFieldEnum | User_tasksScalarFieldEnum[]
  }

  /**
   * user_tasks create
   */
  export type user_tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a user_tasks.
     */
    data: XOR<user_tasksCreateInput, user_tasksUncheckedCreateInput>
  }

  /**
   * user_tasks createMany
   */
  export type user_tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tasks.
     */
    data: user_tasksCreateManyInput | user_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tasks update
   */
  export type user_tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a user_tasks.
     */
    data: XOR<user_tasksUpdateInput, user_tasksUncheckedUpdateInput>
    /**
     * Choose, which user_tasks to update.
     */
    where: user_tasksWhereUniqueInput
  }

  /**
   * user_tasks updateMany
   */
  export type user_tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tasks.
     */
    data: XOR<user_tasksUpdateManyMutationInput, user_tasksUncheckedUpdateManyInput>
    /**
     * Filter which user_tasks to update
     */
    where?: user_tasksWhereInput
    /**
     * Limit how many user_tasks to update.
     */
    limit?: number
  }

  /**
   * user_tasks upsert
   */
  export type user_tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the user_tasks to update in case it exists.
     */
    where: user_tasksWhereUniqueInput
    /**
     * In case the user_tasks found by the `where` argument doesn't exist, create a new user_tasks with this data.
     */
    create: XOR<user_tasksCreateInput, user_tasksUncheckedCreateInput>
    /**
     * In case the user_tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tasksUpdateInput, user_tasksUncheckedUpdateInput>
  }

  /**
   * user_tasks delete
   */
  export type user_tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    /**
     * Filter which user_tasks to delete.
     */
    where: user_tasksWhereUniqueInput
  }

  /**
   * user_tasks deleteMany
   */
  export type user_tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tasks to delete
     */
    where?: user_tasksWhereInput
    /**
     * Limit how many user_tasks to delete.
     */
    limit?: number
  }

  /**
   * user_tasks.challenge_submissions
   */
  export type user_tasks$challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    where?: challenge_submissionsWhereInput
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    cursor?: challenge_submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * user_tasks without action
   */
  export type user_tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    xp: number | null
    coin: number | null
    admin: number | null
    current_streak: number | null
    longest_streak: number | null
  }

  export type UsersSumAggregateOutputType = {
    xp: number | null
    coin: number | null
    admin: number | null
    current_streak: number | null
    longest_streak: number | null
  }

  export type UsersMinAggregateOutputType = {
    uuid: string | null
    username: string | null
    email: string | null
    password: string | null
    xp: number | null
    coin: number | null
    admin: number | null
    registered_at: Date | null
    onboarding_completed: boolean | null
    activity_level: string | null
    current_streak: number | null
    last_completed_at: Date | null
    longest_streak: number | null
    active_border_id: string | null
    active_name_color_id: string | null
    is_banned: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    uuid: string | null
    username: string | null
    email: string | null
    password: string | null
    xp: number | null
    coin: number | null
    admin: number | null
    registered_at: Date | null
    onboarding_completed: boolean | null
    activity_level: string | null
    current_streak: number | null
    last_completed_at: Date | null
    longest_streak: number | null
    active_border_id: string | null
    active_name_color_id: string | null
    is_banned: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    uuid: number
    username: number
    email: number
    password: number
    xp: number
    coin: number
    admin: number
    registered_at: number
    onboarding_completed: number
    activity_level: number
    current_streak: number
    last_completed_at: number
    longest_streak: number
    active_border_id: number
    active_name_color_id: number
    is_banned: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    xp?: true
    coin?: true
    admin?: true
    current_streak?: true
    longest_streak?: true
  }

  export type UsersSumAggregateInputType = {
    xp?: true
    coin?: true
    admin?: true
    current_streak?: true
    longest_streak?: true
  }

  export type UsersMinAggregateInputType = {
    uuid?: true
    username?: true
    email?: true
    password?: true
    xp?: true
    coin?: true
    admin?: true
    registered_at?: true
    onboarding_completed?: true
    activity_level?: true
    current_streak?: true
    last_completed_at?: true
    longest_streak?: true
    active_border_id?: true
    active_name_color_id?: true
    is_banned?: true
  }

  export type UsersMaxAggregateInputType = {
    uuid?: true
    username?: true
    email?: true
    password?: true
    xp?: true
    coin?: true
    admin?: true
    registered_at?: true
    onboarding_completed?: true
    activity_level?: true
    current_streak?: true
    last_completed_at?: true
    longest_streak?: true
    active_border_id?: true
    active_name_color_id?: true
    is_banned?: true
  }

  export type UsersCountAggregateInputType = {
    uuid?: true
    username?: true
    email?: true
    password?: true
    xp?: true
    coin?: true
    admin?: true
    registered_at?: true
    onboarding_completed?: true
    activity_level?: true
    current_streak?: true
    last_completed_at?: true
    longest_streak?: true
    active_border_id?: true
    active_name_color_id?: true
    is_banned?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    uuid: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at: Date
    onboarding_completed: boolean
    activity_level: string | null
    current_streak: number
    last_completed_at: Date | null
    longest_streak: number
    active_border_id: string | null
    active_name_color_id: string | null
    is_banned: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
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


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    xp?: boolean
    coin?: boolean
    admin?: boolean
    registered_at?: boolean
    onboarding_completed?: boolean
    activity_level?: boolean
    current_streak?: boolean
    last_completed_at?: boolean
    longest_streak?: boolean
    active_border_id?: boolean
    active_name_color_id?: boolean
    is_banned?: boolean
    categories_categories_created_byTousers?: boolean | users$categories_categories_created_byTousersArgs<ExtArgs>
    categories_categories_updated_byTousers?: boolean | users$categories_categories_updated_byTousersArgs<ExtArgs>
    tasks_tasks_created_byTousers?: boolean | users$tasks_tasks_created_byTousersArgs<ExtArgs>
    tasks_tasks_updated_byTousers?: boolean | users$tasks_tasks_updated_byTousersArgs<ExtArgs>
    tickets?: boolean | users$ticketsArgs<ExtArgs>
    user_endpoint_access?: boolean | users$user_endpoint_accessArgs<ExtArgs>
    user_shop_items?: boolean | users$user_shop_itemsArgs<ExtArgs>
    user_tasks?: boolean | users$user_tasksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    uuid?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    xp?: boolean
    coin?: boolean
    admin?: boolean
    registered_at?: boolean
    onboarding_completed?: boolean
    activity_level?: boolean
    current_streak?: boolean
    last_completed_at?: boolean
    longest_streak?: boolean
    active_border_id?: boolean
    active_name_color_id?: boolean
    is_banned?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "username" | "email" | "password" | "xp" | "coin" | "admin" | "registered_at" | "onboarding_completed" | "activity_level" | "current_streak" | "last_completed_at" | "longest_streak" | "active_border_id" | "active_name_color_id" | "is_banned", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_categories_created_byTousers?: boolean | users$categories_categories_created_byTousersArgs<ExtArgs>
    categories_categories_updated_byTousers?: boolean | users$categories_categories_updated_byTousersArgs<ExtArgs>
    tasks_tasks_created_byTousers?: boolean | users$tasks_tasks_created_byTousersArgs<ExtArgs>
    tasks_tasks_updated_byTousers?: boolean | users$tasks_tasks_updated_byTousersArgs<ExtArgs>
    tickets?: boolean | users$ticketsArgs<ExtArgs>
    user_endpoint_access?: boolean | users$user_endpoint_accessArgs<ExtArgs>
    user_shop_items?: boolean | users$user_shop_itemsArgs<ExtArgs>
    user_tasks?: boolean | users$user_tasksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      categories_categories_created_byTousers: Prisma.$categoriesPayload<ExtArgs>[]
      categories_categories_updated_byTousers: Prisma.$categoriesPayload<ExtArgs>[]
      tasks_tasks_created_byTousers: Prisma.$tasksPayload<ExtArgs>[]
      tasks_tasks_updated_byTousers: Prisma.$tasksPayload<ExtArgs>[]
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
      user_endpoint_access: Prisma.$user_endpoint_accessPayload<ExtArgs>[]
      user_shop_items: Prisma.$user_shop_itemsPayload<ExtArgs>[]
      user_tasks: Prisma.$user_tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      username: string
      email: string
      password: string
      xp: number
      coin: number
      admin: number
      registered_at: Date
      onboarding_completed: boolean
      activity_level: string | null
      current_streak: number
      last_completed_at: Date | null
      longest_streak: number
      active_border_id: string | null
      active_name_color_id: string | null
      is_banned: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const usersWithUuidOnly = await prisma.users.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
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
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories_categories_created_byTousers<T extends users$categories_categories_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$categories_categories_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories_categories_updated_byTousers<T extends users$categories_categories_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$categories_categories_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_created_byTousers<T extends users$tasks_tasks_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_updated_byTousers<T extends users$tasks_tasks_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends users$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, users$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_endpoint_access<T extends users$user_endpoint_accessArgs<ExtArgs> = {}>(args?: Subset<T, users$user_endpoint_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_shop_items<T extends users$user_shop_itemsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_shop_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_tasks<T extends users$user_tasksArgs<ExtArgs> = {}>(args?: Subset<T, users$user_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly uuid: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly xp: FieldRef<"users", 'Int'>
    readonly coin: FieldRef<"users", 'Int'>
    readonly admin: FieldRef<"users", 'Int'>
    readonly registered_at: FieldRef<"users", 'DateTime'>
    readonly onboarding_completed: FieldRef<"users", 'Boolean'>
    readonly activity_level: FieldRef<"users", 'String'>
    readonly current_streak: FieldRef<"users", 'Int'>
    readonly last_completed_at: FieldRef<"users", 'DateTime'>
    readonly longest_streak: FieldRef<"users", 'Int'>
    readonly active_border_id: FieldRef<"users", 'String'>
    readonly active_name_color_id: FieldRef<"users", 'String'>
    readonly is_banned: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.categories_categories_created_byTousers
   */
  export type users$categories_categories_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.categories_categories_updated_byTousers
   */
  export type users$categories_categories_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_created_byTousers
   */
  export type users$tasks_tasks_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_updated_byTousers
   */
  export type users$tasks_tasks_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.tickets
   */
  export type users$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * users.user_endpoint_access
   */
  export type users$user_endpoint_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    where?: user_endpoint_accessWhereInput
    orderBy?: user_endpoint_accessOrderByWithRelationInput | user_endpoint_accessOrderByWithRelationInput[]
    cursor?: user_endpoint_accessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_endpoint_accessScalarFieldEnum | User_endpoint_accessScalarFieldEnum[]
  }

  /**
   * users.user_shop_items
   */
  export type users$user_shop_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    where?: user_shop_itemsWhereInput
    orderBy?: user_shop_itemsOrderByWithRelationInput | user_shop_itemsOrderByWithRelationInput[]
    cursor?: user_shop_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_shop_itemsScalarFieldEnum | User_shop_itemsScalarFieldEnum[]
  }

  /**
   * users.user_tasks
   */
  export type users$user_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tasks
     */
    select?: user_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tasks
     */
    omit?: user_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tasksInclude<ExtArgs> | null
    where?: user_tasksWhereInput
    orderBy?: user_tasksOrderByWithRelationInput | user_tasksOrderByWithRelationInput[]
    cursor?: user_tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tasksScalarFieldEnum | User_tasksScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model shop_items
   */

  export type AggregateShop_items = {
    _count: Shop_itemsCountAggregateOutputType | null
    _avg: Shop_itemsAvgAggregateOutputType | null
    _sum: Shop_itemsSumAggregateOutputType | null
    _min: Shop_itemsMinAggregateOutputType | null
    _max: Shop_itemsMaxAggregateOutputType | null
  }

  export type Shop_itemsAvgAggregateOutputType = {
    price: number | null
  }

  export type Shop_itemsSumAggregateOutputType = {
    price: number | null
  }

  export type Shop_itemsMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    created_at: Date | null
    value: string | null
  }

  export type Shop_itemsMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    created_at: Date | null
    value: string | null
  }

  export type Shop_itemsCountAggregateOutputType = {
    uuid: number
    name: number
    description: number
    price: number
    category: number
    created_at: number
    value: number
    _all: number
  }


  export type Shop_itemsAvgAggregateInputType = {
    price?: true
  }

  export type Shop_itemsSumAggregateInputType = {
    price?: true
  }

  export type Shop_itemsMinAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    price?: true
    category?: true
    created_at?: true
    value?: true
  }

  export type Shop_itemsMaxAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    price?: true
    category?: true
    created_at?: true
    value?: true
  }

  export type Shop_itemsCountAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    price?: true
    category?: true
    created_at?: true
    value?: true
    _all?: true
  }

  export type Shop_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shop_items to aggregate.
     */
    where?: shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_items to fetch.
     */
    orderBy?: shop_itemsOrderByWithRelationInput | shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shop_items
    **/
    _count?: true | Shop_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shop_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shop_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shop_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shop_itemsMaxAggregateInputType
  }

  export type GetShop_itemsAggregateType<T extends Shop_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateShop_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop_items[P]>
      : GetScalarType<T[P], AggregateShop_items[P]>
  }




  export type shop_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shop_itemsWhereInput
    orderBy?: shop_itemsOrderByWithAggregationInput | shop_itemsOrderByWithAggregationInput[]
    by: Shop_itemsScalarFieldEnum[] | Shop_itemsScalarFieldEnum
    having?: shop_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shop_itemsCountAggregateInputType | true
    _avg?: Shop_itemsAvgAggregateInputType
    _sum?: Shop_itemsSumAggregateInputType
    _min?: Shop_itemsMinAggregateInputType
    _max?: Shop_itemsMaxAggregateInputType
  }

  export type Shop_itemsGroupByOutputType = {
    uuid: string
    name: string
    description: string
    price: number
    category: string
    created_at: Date
    value: string | null
    _count: Shop_itemsCountAggregateOutputType | null
    _avg: Shop_itemsAvgAggregateOutputType | null
    _sum: Shop_itemsSumAggregateOutputType | null
    _min: Shop_itemsMinAggregateOutputType | null
    _max: Shop_itemsMaxAggregateOutputType | null
  }

  type GetShop_itemsGroupByPayload<T extends shop_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shop_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shop_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shop_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Shop_itemsGroupByOutputType[P]>
        }
      >
    >


  export type shop_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    created_at?: boolean
    value?: boolean
    user_shop_items?: boolean | shop_items$user_shop_itemsArgs<ExtArgs>
    _count?: boolean | Shop_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop_items"]>



  export type shop_itemsSelectScalar = {
    uuid?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    created_at?: boolean
    value?: boolean
  }

  export type shop_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "description" | "price" | "category" | "created_at" | "value", ExtArgs["result"]["shop_items"]>
  export type shop_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_shop_items?: boolean | shop_items$user_shop_itemsArgs<ExtArgs>
    _count?: boolean | Shop_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $shop_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shop_items"
    objects: {
      user_shop_items: Prisma.$user_shop_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      description: string
      price: number
      category: string
      created_at: Date
      value: string | null
    }, ExtArgs["result"]["shop_items"]>
    composites: {}
  }

  type shop_itemsGetPayload<S extends boolean | null | undefined | shop_itemsDefaultArgs> = $Result.GetResult<Prisma.$shop_itemsPayload, S>

  type shop_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shop_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shop_itemsCountAggregateInputType | true
    }

  export interface shop_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shop_items'], meta: { name: 'shop_items' } }
    /**
     * Find zero or one Shop_items that matches the filter.
     * @param {shop_itemsFindUniqueArgs} args - Arguments to find a Shop_items
     * @example
     * // Get one Shop_items
     * const shop_items = await prisma.shop_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shop_itemsFindUniqueArgs>(args: SelectSubset<T, shop_itemsFindUniqueArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shop_itemsFindUniqueOrThrowArgs} args - Arguments to find a Shop_items
     * @example
     * // Get one Shop_items
     * const shop_items = await prisma.shop_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shop_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, shop_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_itemsFindFirstArgs} args - Arguments to find a Shop_items
     * @example
     * // Get one Shop_items
     * const shop_items = await prisma.shop_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shop_itemsFindFirstArgs>(args?: SelectSubset<T, shop_itemsFindFirstArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_itemsFindFirstOrThrowArgs} args - Arguments to find a Shop_items
     * @example
     * // Get one Shop_items
     * const shop_items = await prisma.shop_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shop_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, shop_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shop_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shop_items
     * const shop_items = await prisma.shop_items.findMany()
     * 
     * // Get first 10 Shop_items
     * const shop_items = await prisma.shop_items.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const shop_itemsWithUuidOnly = await prisma.shop_items.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends shop_itemsFindManyArgs>(args?: SelectSubset<T, shop_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop_items.
     * @param {shop_itemsCreateArgs} args - Arguments to create a Shop_items.
     * @example
     * // Create one Shop_items
     * const Shop_items = await prisma.shop_items.create({
     *   data: {
     *     // ... data to create a Shop_items
     *   }
     * })
     * 
     */
    create<T extends shop_itemsCreateArgs>(args: SelectSubset<T, shop_itemsCreateArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shop_items.
     * @param {shop_itemsCreateManyArgs} args - Arguments to create many Shop_items.
     * @example
     * // Create many Shop_items
     * const shop_items = await prisma.shop_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shop_itemsCreateManyArgs>(args?: SelectSubset<T, shop_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop_items.
     * @param {shop_itemsDeleteArgs} args - Arguments to delete one Shop_items.
     * @example
     * // Delete one Shop_items
     * const Shop_items = await prisma.shop_items.delete({
     *   where: {
     *     // ... filter to delete one Shop_items
     *   }
     * })
     * 
     */
    delete<T extends shop_itemsDeleteArgs>(args: SelectSubset<T, shop_itemsDeleteArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop_items.
     * @param {shop_itemsUpdateArgs} args - Arguments to update one Shop_items.
     * @example
     * // Update one Shop_items
     * const shop_items = await prisma.shop_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shop_itemsUpdateArgs>(args: SelectSubset<T, shop_itemsUpdateArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shop_items.
     * @param {shop_itemsDeleteManyArgs} args - Arguments to filter Shop_items to delete.
     * @example
     * // Delete a few Shop_items
     * const { count } = await prisma.shop_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shop_itemsDeleteManyArgs>(args?: SelectSubset<T, shop_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shop_items
     * const shop_items = await prisma.shop_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shop_itemsUpdateManyArgs>(args: SelectSubset<T, shop_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop_items.
     * @param {shop_itemsUpsertArgs} args - Arguments to update or create a Shop_items.
     * @example
     * // Update or create a Shop_items
     * const shop_items = await prisma.shop_items.upsert({
     *   create: {
     *     // ... data to create a Shop_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop_items we want to update
     *   }
     * })
     */
    upsert<T extends shop_itemsUpsertArgs>(args: SelectSubset<T, shop_itemsUpsertArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_itemsCountArgs} args - Arguments to filter Shop_items to count.
     * @example
     * // Count the number of Shop_items
     * const count = await prisma.shop_items.count({
     *   where: {
     *     // ... the filter for the Shop_items we want to count
     *   }
     * })
    **/
    count<T extends shop_itemsCountArgs>(
      args?: Subset<T, shop_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shop_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Shop_itemsAggregateArgs>(args: Subset<T, Shop_itemsAggregateArgs>): Prisma.PrismaPromise<GetShop_itemsAggregateType<T>>

    /**
     * Group by Shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shop_itemsGroupByArgs} args - Group by arguments.
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
      T extends shop_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shop_itemsGroupByArgs['orderBy'] }
        : { orderBy?: shop_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shop_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShop_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shop_items model
   */
  readonly fields: shop_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shop_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shop_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_shop_items<T extends shop_items$user_shop_itemsArgs<ExtArgs> = {}>(args?: Subset<T, shop_items$user_shop_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the shop_items model
   */
  interface shop_itemsFieldRefs {
    readonly uuid: FieldRef<"shop_items", 'String'>
    readonly name: FieldRef<"shop_items", 'String'>
    readonly description: FieldRef<"shop_items", 'String'>
    readonly price: FieldRef<"shop_items", 'Int'>
    readonly category: FieldRef<"shop_items", 'String'>
    readonly created_at: FieldRef<"shop_items", 'DateTime'>
    readonly value: FieldRef<"shop_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * shop_items findUnique
   */
  export type shop_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which shop_items to fetch.
     */
    where: shop_itemsWhereUniqueInput
  }

  /**
   * shop_items findUniqueOrThrow
   */
  export type shop_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which shop_items to fetch.
     */
    where: shop_itemsWhereUniqueInput
  }

  /**
   * shop_items findFirst
   */
  export type shop_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which shop_items to fetch.
     */
    where?: shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_items to fetch.
     */
    orderBy?: shop_itemsOrderByWithRelationInput | shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shop_items.
     */
    cursor?: shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shop_items.
     */
    distinct?: Shop_itemsScalarFieldEnum | Shop_itemsScalarFieldEnum[]
  }

  /**
   * shop_items findFirstOrThrow
   */
  export type shop_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which shop_items to fetch.
     */
    where?: shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_items to fetch.
     */
    orderBy?: shop_itemsOrderByWithRelationInput | shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shop_items.
     */
    cursor?: shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shop_items.
     */
    distinct?: Shop_itemsScalarFieldEnum | Shop_itemsScalarFieldEnum[]
  }

  /**
   * shop_items findMany
   */
  export type shop_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which shop_items to fetch.
     */
    where?: shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shop_items to fetch.
     */
    orderBy?: shop_itemsOrderByWithRelationInput | shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shop_items.
     */
    cursor?: shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shop_items.
     */
    skip?: number
    distinct?: Shop_itemsScalarFieldEnum | Shop_itemsScalarFieldEnum[]
  }

  /**
   * shop_items create
   */
  export type shop_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a shop_items.
     */
    data: XOR<shop_itemsCreateInput, shop_itemsUncheckedCreateInput>
  }

  /**
   * shop_items createMany
   */
  export type shop_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shop_items.
     */
    data: shop_itemsCreateManyInput | shop_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shop_items update
   */
  export type shop_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a shop_items.
     */
    data: XOR<shop_itemsUpdateInput, shop_itemsUncheckedUpdateInput>
    /**
     * Choose, which shop_items to update.
     */
    where: shop_itemsWhereUniqueInput
  }

  /**
   * shop_items updateMany
   */
  export type shop_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shop_items.
     */
    data: XOR<shop_itemsUpdateManyMutationInput, shop_itemsUncheckedUpdateManyInput>
    /**
     * Filter which shop_items to update
     */
    where?: shop_itemsWhereInput
    /**
     * Limit how many shop_items to update.
     */
    limit?: number
  }

  /**
   * shop_items upsert
   */
  export type shop_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the shop_items to update in case it exists.
     */
    where: shop_itemsWhereUniqueInput
    /**
     * In case the shop_items found by the `where` argument doesn't exist, create a new shop_items with this data.
     */
    create: XOR<shop_itemsCreateInput, shop_itemsUncheckedCreateInput>
    /**
     * In case the shop_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shop_itemsUpdateInput, shop_itemsUncheckedUpdateInput>
  }

  /**
   * shop_items delete
   */
  export type shop_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
    /**
     * Filter which shop_items to delete.
     */
    where: shop_itemsWhereUniqueInput
  }

  /**
   * shop_items deleteMany
   */
  export type shop_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shop_items to delete
     */
    where?: shop_itemsWhereInput
    /**
     * Limit how many shop_items to delete.
     */
    limit?: number
  }

  /**
   * shop_items.user_shop_items
   */
  export type shop_items$user_shop_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    where?: user_shop_itemsWhereInput
    orderBy?: user_shop_itemsOrderByWithRelationInput | user_shop_itemsOrderByWithRelationInput[]
    cursor?: user_shop_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_shop_itemsScalarFieldEnum | User_shop_itemsScalarFieldEnum[]
  }

  /**
   * shop_items without action
   */
  export type shop_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop_items
     */
    select?: shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop_items
     */
    omit?: shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shop_itemsInclude<ExtArgs> | null
  }


  /**
   * Model user_shop_items
   */

  export type AggregateUser_shop_items = {
    _count: User_shop_itemsCountAggregateOutputType | null
    _min: User_shop_itemsMinAggregateOutputType | null
    _max: User_shop_itemsMaxAggregateOutputType | null
  }

  export type User_shop_itemsMinAggregateOutputType = {
    uuid: string | null
    user_id: string | null
    shop_item_id: string | null
    purchased_at: Date | null
  }

  export type User_shop_itemsMaxAggregateOutputType = {
    uuid: string | null
    user_id: string | null
    shop_item_id: string | null
    purchased_at: Date | null
  }

  export type User_shop_itemsCountAggregateOutputType = {
    uuid: number
    user_id: number
    shop_item_id: number
    purchased_at: number
    _all: number
  }


  export type User_shop_itemsMinAggregateInputType = {
    uuid?: true
    user_id?: true
    shop_item_id?: true
    purchased_at?: true
  }

  export type User_shop_itemsMaxAggregateInputType = {
    uuid?: true
    user_id?: true
    shop_item_id?: true
    purchased_at?: true
  }

  export type User_shop_itemsCountAggregateInputType = {
    uuid?: true
    user_id?: true
    shop_item_id?: true
    purchased_at?: true
    _all?: true
  }

  export type User_shop_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_shop_items to aggregate.
     */
    where?: user_shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_shop_items to fetch.
     */
    orderBy?: user_shop_itemsOrderByWithRelationInput | user_shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_shop_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_shop_items
    **/
    _count?: true | User_shop_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_shop_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_shop_itemsMaxAggregateInputType
  }

  export type GetUser_shop_itemsAggregateType<T extends User_shop_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_shop_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_shop_items[P]>
      : GetScalarType<T[P], AggregateUser_shop_items[P]>
  }




  export type user_shop_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_shop_itemsWhereInput
    orderBy?: user_shop_itemsOrderByWithAggregationInput | user_shop_itemsOrderByWithAggregationInput[]
    by: User_shop_itemsScalarFieldEnum[] | User_shop_itemsScalarFieldEnum
    having?: user_shop_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_shop_itemsCountAggregateInputType | true
    _min?: User_shop_itemsMinAggregateInputType
    _max?: User_shop_itemsMaxAggregateInputType
  }

  export type User_shop_itemsGroupByOutputType = {
    uuid: string
    user_id: string
    shop_item_id: string
    purchased_at: Date
    _count: User_shop_itemsCountAggregateOutputType | null
    _min: User_shop_itemsMinAggregateOutputType | null
    _max: User_shop_itemsMaxAggregateOutputType | null
  }

  type GetUser_shop_itemsGroupByPayload<T extends user_shop_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_shop_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_shop_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_shop_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], User_shop_itemsGroupByOutputType[P]>
        }
      >
    >


  export type user_shop_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    user_id?: boolean
    shop_item_id?: boolean
    purchased_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    shop_items?: boolean | shop_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_shop_items"]>



  export type user_shop_itemsSelectScalar = {
    uuid?: boolean
    user_id?: boolean
    shop_item_id?: boolean
    purchased_at?: boolean
  }

  export type user_shop_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "user_id" | "shop_item_id" | "purchased_at", ExtArgs["result"]["user_shop_items"]>
  export type user_shop_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    shop_items?: boolean | shop_itemsDefaultArgs<ExtArgs>
  }

  export type $user_shop_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_shop_items"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      shop_items: Prisma.$shop_itemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      user_id: string
      shop_item_id: string
      purchased_at: Date
    }, ExtArgs["result"]["user_shop_items"]>
    composites: {}
  }

  type user_shop_itemsGetPayload<S extends boolean | null | undefined | user_shop_itemsDefaultArgs> = $Result.GetResult<Prisma.$user_shop_itemsPayload, S>

  type user_shop_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_shop_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_shop_itemsCountAggregateInputType | true
    }

  export interface user_shop_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_shop_items'], meta: { name: 'user_shop_items' } }
    /**
     * Find zero or one User_shop_items that matches the filter.
     * @param {user_shop_itemsFindUniqueArgs} args - Arguments to find a User_shop_items
     * @example
     * // Get one User_shop_items
     * const user_shop_items = await prisma.user_shop_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_shop_itemsFindUniqueArgs>(args: SelectSubset<T, user_shop_itemsFindUniqueArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_shop_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_shop_itemsFindUniqueOrThrowArgs} args - Arguments to find a User_shop_items
     * @example
     * // Get one User_shop_items
     * const user_shop_items = await prisma.user_shop_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_shop_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_shop_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_shop_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_shop_itemsFindFirstArgs} args - Arguments to find a User_shop_items
     * @example
     * // Get one User_shop_items
     * const user_shop_items = await prisma.user_shop_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_shop_itemsFindFirstArgs>(args?: SelectSubset<T, user_shop_itemsFindFirstArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_shop_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_shop_itemsFindFirstOrThrowArgs} args - Arguments to find a User_shop_items
     * @example
     * // Get one User_shop_items
     * const user_shop_items = await prisma.user_shop_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_shop_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_shop_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_shop_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_shop_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_shop_items
     * const user_shop_items = await prisma.user_shop_items.findMany()
     * 
     * // Get first 10 User_shop_items
     * const user_shop_items = await prisma.user_shop_items.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const user_shop_itemsWithUuidOnly = await prisma.user_shop_items.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends user_shop_itemsFindManyArgs>(args?: SelectSubset<T, user_shop_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_shop_items.
     * @param {user_shop_itemsCreateArgs} args - Arguments to create a User_shop_items.
     * @example
     * // Create one User_shop_items
     * const User_shop_items = await prisma.user_shop_items.create({
     *   data: {
     *     // ... data to create a User_shop_items
     *   }
     * })
     * 
     */
    create<T extends user_shop_itemsCreateArgs>(args: SelectSubset<T, user_shop_itemsCreateArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_shop_items.
     * @param {user_shop_itemsCreateManyArgs} args - Arguments to create many User_shop_items.
     * @example
     * // Create many User_shop_items
     * const user_shop_items = await prisma.user_shop_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_shop_itemsCreateManyArgs>(args?: SelectSubset<T, user_shop_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_shop_items.
     * @param {user_shop_itemsDeleteArgs} args - Arguments to delete one User_shop_items.
     * @example
     * // Delete one User_shop_items
     * const User_shop_items = await prisma.user_shop_items.delete({
     *   where: {
     *     // ... filter to delete one User_shop_items
     *   }
     * })
     * 
     */
    delete<T extends user_shop_itemsDeleteArgs>(args: SelectSubset<T, user_shop_itemsDeleteArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_shop_items.
     * @param {user_shop_itemsUpdateArgs} args - Arguments to update one User_shop_items.
     * @example
     * // Update one User_shop_items
     * const user_shop_items = await prisma.user_shop_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_shop_itemsUpdateArgs>(args: SelectSubset<T, user_shop_itemsUpdateArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_shop_items.
     * @param {user_shop_itemsDeleteManyArgs} args - Arguments to filter User_shop_items to delete.
     * @example
     * // Delete a few User_shop_items
     * const { count } = await prisma.user_shop_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_shop_itemsDeleteManyArgs>(args?: SelectSubset<T, user_shop_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_shop_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_shop_items
     * const user_shop_items = await prisma.user_shop_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_shop_itemsUpdateManyArgs>(args: SelectSubset<T, user_shop_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_shop_items.
     * @param {user_shop_itemsUpsertArgs} args - Arguments to update or create a User_shop_items.
     * @example
     * // Update or create a User_shop_items
     * const user_shop_items = await prisma.user_shop_items.upsert({
     *   create: {
     *     // ... data to create a User_shop_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_shop_items we want to update
     *   }
     * })
     */
    upsert<T extends user_shop_itemsUpsertArgs>(args: SelectSubset<T, user_shop_itemsUpsertArgs<ExtArgs>>): Prisma__user_shop_itemsClient<$Result.GetResult<Prisma.$user_shop_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_shop_itemsCountArgs} args - Arguments to filter User_shop_items to count.
     * @example
     * // Count the number of User_shop_items
     * const count = await prisma.user_shop_items.count({
     *   where: {
     *     // ... the filter for the User_shop_items we want to count
     *   }
     * })
    **/
    count<T extends user_shop_itemsCountArgs>(
      args?: Subset<T, user_shop_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_shop_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_shop_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_shop_itemsAggregateArgs>(args: Subset<T, User_shop_itemsAggregateArgs>): Prisma.PrismaPromise<GetUser_shop_itemsAggregateType<T>>

    /**
     * Group by User_shop_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_shop_itemsGroupByArgs} args - Group by arguments.
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
      T extends user_shop_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_shop_itemsGroupByArgs['orderBy'] }
        : { orderBy?: user_shop_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_shop_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_shop_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_shop_items model
   */
  readonly fields: user_shop_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_shop_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_shop_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop_items<T extends shop_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, shop_itemsDefaultArgs<ExtArgs>>): Prisma__shop_itemsClient<$Result.GetResult<Prisma.$shop_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_shop_items model
   */
  interface user_shop_itemsFieldRefs {
    readonly uuid: FieldRef<"user_shop_items", 'String'>
    readonly user_id: FieldRef<"user_shop_items", 'String'>
    readonly shop_item_id: FieldRef<"user_shop_items", 'String'>
    readonly purchased_at: FieldRef<"user_shop_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_shop_items findUnique
   */
  export type user_shop_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which user_shop_items to fetch.
     */
    where: user_shop_itemsWhereUniqueInput
  }

  /**
   * user_shop_items findUniqueOrThrow
   */
  export type user_shop_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which user_shop_items to fetch.
     */
    where: user_shop_itemsWhereUniqueInput
  }

  /**
   * user_shop_items findFirst
   */
  export type user_shop_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which user_shop_items to fetch.
     */
    where?: user_shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_shop_items to fetch.
     */
    orderBy?: user_shop_itemsOrderByWithRelationInput | user_shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_shop_items.
     */
    cursor?: user_shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_shop_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_shop_items.
     */
    distinct?: User_shop_itemsScalarFieldEnum | User_shop_itemsScalarFieldEnum[]
  }

  /**
   * user_shop_items findFirstOrThrow
   */
  export type user_shop_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which user_shop_items to fetch.
     */
    where?: user_shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_shop_items to fetch.
     */
    orderBy?: user_shop_itemsOrderByWithRelationInput | user_shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_shop_items.
     */
    cursor?: user_shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_shop_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_shop_items.
     */
    distinct?: User_shop_itemsScalarFieldEnum | User_shop_itemsScalarFieldEnum[]
  }

  /**
   * user_shop_items findMany
   */
  export type user_shop_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * Filter, which user_shop_items to fetch.
     */
    where?: user_shop_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_shop_items to fetch.
     */
    orderBy?: user_shop_itemsOrderByWithRelationInput | user_shop_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_shop_items.
     */
    cursor?: user_shop_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_shop_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_shop_items.
     */
    skip?: number
    distinct?: User_shop_itemsScalarFieldEnum | User_shop_itemsScalarFieldEnum[]
  }

  /**
   * user_shop_items create
   */
  export type user_shop_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_shop_items.
     */
    data: XOR<user_shop_itemsCreateInput, user_shop_itemsUncheckedCreateInput>
  }

  /**
   * user_shop_items createMany
   */
  export type user_shop_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_shop_items.
     */
    data: user_shop_itemsCreateManyInput | user_shop_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_shop_items update
   */
  export type user_shop_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_shop_items.
     */
    data: XOR<user_shop_itemsUpdateInput, user_shop_itemsUncheckedUpdateInput>
    /**
     * Choose, which user_shop_items to update.
     */
    where: user_shop_itemsWhereUniqueInput
  }

  /**
   * user_shop_items updateMany
   */
  export type user_shop_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_shop_items.
     */
    data: XOR<user_shop_itemsUpdateManyMutationInput, user_shop_itemsUncheckedUpdateManyInput>
    /**
     * Filter which user_shop_items to update
     */
    where?: user_shop_itemsWhereInput
    /**
     * Limit how many user_shop_items to update.
     */
    limit?: number
  }

  /**
   * user_shop_items upsert
   */
  export type user_shop_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_shop_items to update in case it exists.
     */
    where: user_shop_itemsWhereUniqueInput
    /**
     * In case the user_shop_items found by the `where` argument doesn't exist, create a new user_shop_items with this data.
     */
    create: XOR<user_shop_itemsCreateInput, user_shop_itemsUncheckedCreateInput>
    /**
     * In case the user_shop_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_shop_itemsUpdateInput, user_shop_itemsUncheckedUpdateInput>
  }

  /**
   * user_shop_items delete
   */
  export type user_shop_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
    /**
     * Filter which user_shop_items to delete.
     */
    where: user_shop_itemsWhereUniqueInput
  }

  /**
   * user_shop_items deleteMany
   */
  export type user_shop_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_shop_items to delete
     */
    where?: user_shop_itemsWhereInput
    /**
     * Limit how many user_shop_items to delete.
     */
    limit?: number
  }

  /**
   * user_shop_items without action
   */
  export type user_shop_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_shop_items
     */
    select?: user_shop_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_shop_items
     */
    omit?: user_shop_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_shop_itemsInclude<ExtArgs> | null
  }


  /**
   * Model user_endpoint_access
   */

  export type AggregateUser_endpoint_access = {
    _count: User_endpoint_accessCountAggregateOutputType | null
    _min: User_endpoint_accessMinAggregateOutputType | null
    _max: User_endpoint_accessMaxAggregateOutputType | null
  }

  export type User_endpoint_accessMinAggregateOutputType = {
    uuid: string | null
    endpoint: string | null
    methods: string | null
    user_id: string | null
  }

  export type User_endpoint_accessMaxAggregateOutputType = {
    uuid: string | null
    endpoint: string | null
    methods: string | null
    user_id: string | null
  }

  export type User_endpoint_accessCountAggregateOutputType = {
    uuid: number
    endpoint: number
    methods: number
    user_id: number
    _all: number
  }


  export type User_endpoint_accessMinAggregateInputType = {
    uuid?: true
    endpoint?: true
    methods?: true
    user_id?: true
  }

  export type User_endpoint_accessMaxAggregateInputType = {
    uuid?: true
    endpoint?: true
    methods?: true
    user_id?: true
  }

  export type User_endpoint_accessCountAggregateInputType = {
    uuid?: true
    endpoint?: true
    methods?: true
    user_id?: true
    _all?: true
  }

  export type User_endpoint_accessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_endpoint_access to aggregate.
     */
    where?: user_endpoint_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_endpoint_accesses to fetch.
     */
    orderBy?: user_endpoint_accessOrderByWithRelationInput | user_endpoint_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_endpoint_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_endpoint_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_endpoint_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_endpoint_accesses
    **/
    _count?: true | User_endpoint_accessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_endpoint_accessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_endpoint_accessMaxAggregateInputType
  }

  export type GetUser_endpoint_accessAggregateType<T extends User_endpoint_accessAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_endpoint_access]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_endpoint_access[P]>
      : GetScalarType<T[P], AggregateUser_endpoint_access[P]>
  }




  export type user_endpoint_accessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_endpoint_accessWhereInput
    orderBy?: user_endpoint_accessOrderByWithAggregationInput | user_endpoint_accessOrderByWithAggregationInput[]
    by: User_endpoint_accessScalarFieldEnum[] | User_endpoint_accessScalarFieldEnum
    having?: user_endpoint_accessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_endpoint_accessCountAggregateInputType | true
    _min?: User_endpoint_accessMinAggregateInputType
    _max?: User_endpoint_accessMaxAggregateInputType
  }

  export type User_endpoint_accessGroupByOutputType = {
    uuid: string
    endpoint: string
    methods: string
    user_id: string
    _count: User_endpoint_accessCountAggregateOutputType | null
    _min: User_endpoint_accessMinAggregateOutputType | null
    _max: User_endpoint_accessMaxAggregateOutputType | null
  }

  type GetUser_endpoint_accessGroupByPayload<T extends user_endpoint_accessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_endpoint_accessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_endpoint_accessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_endpoint_accessGroupByOutputType[P]>
            : GetScalarType<T[P], User_endpoint_accessGroupByOutputType[P]>
        }
      >
    >


  export type user_endpoint_accessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    endpoint?: boolean
    methods?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_endpoint_access"]>



  export type user_endpoint_accessSelectScalar = {
    uuid?: boolean
    endpoint?: boolean
    methods?: boolean
    user_id?: boolean
  }

  export type user_endpoint_accessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "endpoint" | "methods" | "user_id", ExtArgs["result"]["user_endpoint_access"]>
  export type user_endpoint_accessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_endpoint_accessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_endpoint_access"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      endpoint: string
      methods: string
      user_id: string
    }, ExtArgs["result"]["user_endpoint_access"]>
    composites: {}
  }

  type user_endpoint_accessGetPayload<S extends boolean | null | undefined | user_endpoint_accessDefaultArgs> = $Result.GetResult<Prisma.$user_endpoint_accessPayload, S>

  type user_endpoint_accessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_endpoint_accessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_endpoint_accessCountAggregateInputType | true
    }

  export interface user_endpoint_accessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_endpoint_access'], meta: { name: 'user_endpoint_access' } }
    /**
     * Find zero or one User_endpoint_access that matches the filter.
     * @param {user_endpoint_accessFindUniqueArgs} args - Arguments to find a User_endpoint_access
     * @example
     * // Get one User_endpoint_access
     * const user_endpoint_access = await prisma.user_endpoint_access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_endpoint_accessFindUniqueArgs>(args: SelectSubset<T, user_endpoint_accessFindUniqueArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_endpoint_access that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_endpoint_accessFindUniqueOrThrowArgs} args - Arguments to find a User_endpoint_access
     * @example
     * // Get one User_endpoint_access
     * const user_endpoint_access = await prisma.user_endpoint_access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_endpoint_accessFindUniqueOrThrowArgs>(args: SelectSubset<T, user_endpoint_accessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_endpoint_access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_endpoint_accessFindFirstArgs} args - Arguments to find a User_endpoint_access
     * @example
     * // Get one User_endpoint_access
     * const user_endpoint_access = await prisma.user_endpoint_access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_endpoint_accessFindFirstArgs>(args?: SelectSubset<T, user_endpoint_accessFindFirstArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_endpoint_access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_endpoint_accessFindFirstOrThrowArgs} args - Arguments to find a User_endpoint_access
     * @example
     * // Get one User_endpoint_access
     * const user_endpoint_access = await prisma.user_endpoint_access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_endpoint_accessFindFirstOrThrowArgs>(args?: SelectSubset<T, user_endpoint_accessFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_endpoint_accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_endpoint_accessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_endpoint_accesses
     * const user_endpoint_accesses = await prisma.user_endpoint_access.findMany()
     * 
     * // Get first 10 User_endpoint_accesses
     * const user_endpoint_accesses = await prisma.user_endpoint_access.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const user_endpoint_accessWithUuidOnly = await prisma.user_endpoint_access.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends user_endpoint_accessFindManyArgs>(args?: SelectSubset<T, user_endpoint_accessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_endpoint_access.
     * @param {user_endpoint_accessCreateArgs} args - Arguments to create a User_endpoint_access.
     * @example
     * // Create one User_endpoint_access
     * const User_endpoint_access = await prisma.user_endpoint_access.create({
     *   data: {
     *     // ... data to create a User_endpoint_access
     *   }
     * })
     * 
     */
    create<T extends user_endpoint_accessCreateArgs>(args: SelectSubset<T, user_endpoint_accessCreateArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_endpoint_accesses.
     * @param {user_endpoint_accessCreateManyArgs} args - Arguments to create many User_endpoint_accesses.
     * @example
     * // Create many User_endpoint_accesses
     * const user_endpoint_access = await prisma.user_endpoint_access.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_endpoint_accessCreateManyArgs>(args?: SelectSubset<T, user_endpoint_accessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_endpoint_access.
     * @param {user_endpoint_accessDeleteArgs} args - Arguments to delete one User_endpoint_access.
     * @example
     * // Delete one User_endpoint_access
     * const User_endpoint_access = await prisma.user_endpoint_access.delete({
     *   where: {
     *     // ... filter to delete one User_endpoint_access
     *   }
     * })
     * 
     */
    delete<T extends user_endpoint_accessDeleteArgs>(args: SelectSubset<T, user_endpoint_accessDeleteArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_endpoint_access.
     * @param {user_endpoint_accessUpdateArgs} args - Arguments to update one User_endpoint_access.
     * @example
     * // Update one User_endpoint_access
     * const user_endpoint_access = await prisma.user_endpoint_access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_endpoint_accessUpdateArgs>(args: SelectSubset<T, user_endpoint_accessUpdateArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_endpoint_accesses.
     * @param {user_endpoint_accessDeleteManyArgs} args - Arguments to filter User_endpoint_accesses to delete.
     * @example
     * // Delete a few User_endpoint_accesses
     * const { count } = await prisma.user_endpoint_access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_endpoint_accessDeleteManyArgs>(args?: SelectSubset<T, user_endpoint_accessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_endpoint_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_endpoint_accessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_endpoint_accesses
     * const user_endpoint_access = await prisma.user_endpoint_access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_endpoint_accessUpdateManyArgs>(args: SelectSubset<T, user_endpoint_accessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_endpoint_access.
     * @param {user_endpoint_accessUpsertArgs} args - Arguments to update or create a User_endpoint_access.
     * @example
     * // Update or create a User_endpoint_access
     * const user_endpoint_access = await prisma.user_endpoint_access.upsert({
     *   create: {
     *     // ... data to create a User_endpoint_access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_endpoint_access we want to update
     *   }
     * })
     */
    upsert<T extends user_endpoint_accessUpsertArgs>(args: SelectSubset<T, user_endpoint_accessUpsertArgs<ExtArgs>>): Prisma__user_endpoint_accessClient<$Result.GetResult<Prisma.$user_endpoint_accessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_endpoint_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_endpoint_accessCountArgs} args - Arguments to filter User_endpoint_accesses to count.
     * @example
     * // Count the number of User_endpoint_accesses
     * const count = await prisma.user_endpoint_access.count({
     *   where: {
     *     // ... the filter for the User_endpoint_accesses we want to count
     *   }
     * })
    **/
    count<T extends user_endpoint_accessCountArgs>(
      args?: Subset<T, user_endpoint_accessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_endpoint_accessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_endpoint_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_endpoint_accessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_endpoint_accessAggregateArgs>(args: Subset<T, User_endpoint_accessAggregateArgs>): Prisma.PrismaPromise<GetUser_endpoint_accessAggregateType<T>>

    /**
     * Group by User_endpoint_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_endpoint_accessGroupByArgs} args - Group by arguments.
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
      T extends user_endpoint_accessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_endpoint_accessGroupByArgs['orderBy'] }
        : { orderBy?: user_endpoint_accessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_endpoint_accessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_endpoint_accessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_endpoint_access model
   */
  readonly fields: user_endpoint_accessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_endpoint_access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_endpoint_accessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_endpoint_access model
   */
  interface user_endpoint_accessFieldRefs {
    readonly uuid: FieldRef<"user_endpoint_access", 'String'>
    readonly endpoint: FieldRef<"user_endpoint_access", 'String'>
    readonly methods: FieldRef<"user_endpoint_access", 'String'>
    readonly user_id: FieldRef<"user_endpoint_access", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_endpoint_access findUnique
   */
  export type user_endpoint_accessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * Filter, which user_endpoint_access to fetch.
     */
    where: user_endpoint_accessWhereUniqueInput
  }

  /**
   * user_endpoint_access findUniqueOrThrow
   */
  export type user_endpoint_accessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * Filter, which user_endpoint_access to fetch.
     */
    where: user_endpoint_accessWhereUniqueInput
  }

  /**
   * user_endpoint_access findFirst
   */
  export type user_endpoint_accessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * Filter, which user_endpoint_access to fetch.
     */
    where?: user_endpoint_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_endpoint_accesses to fetch.
     */
    orderBy?: user_endpoint_accessOrderByWithRelationInput | user_endpoint_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_endpoint_accesses.
     */
    cursor?: user_endpoint_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_endpoint_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_endpoint_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_endpoint_accesses.
     */
    distinct?: User_endpoint_accessScalarFieldEnum | User_endpoint_accessScalarFieldEnum[]
  }

  /**
   * user_endpoint_access findFirstOrThrow
   */
  export type user_endpoint_accessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * Filter, which user_endpoint_access to fetch.
     */
    where?: user_endpoint_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_endpoint_accesses to fetch.
     */
    orderBy?: user_endpoint_accessOrderByWithRelationInput | user_endpoint_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_endpoint_accesses.
     */
    cursor?: user_endpoint_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_endpoint_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_endpoint_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_endpoint_accesses.
     */
    distinct?: User_endpoint_accessScalarFieldEnum | User_endpoint_accessScalarFieldEnum[]
  }

  /**
   * user_endpoint_access findMany
   */
  export type user_endpoint_accessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * Filter, which user_endpoint_accesses to fetch.
     */
    where?: user_endpoint_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_endpoint_accesses to fetch.
     */
    orderBy?: user_endpoint_accessOrderByWithRelationInput | user_endpoint_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_endpoint_accesses.
     */
    cursor?: user_endpoint_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_endpoint_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_endpoint_accesses.
     */
    skip?: number
    distinct?: User_endpoint_accessScalarFieldEnum | User_endpoint_accessScalarFieldEnum[]
  }

  /**
   * user_endpoint_access create
   */
  export type user_endpoint_accessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * The data needed to create a user_endpoint_access.
     */
    data: XOR<user_endpoint_accessCreateInput, user_endpoint_accessUncheckedCreateInput>
  }

  /**
   * user_endpoint_access createMany
   */
  export type user_endpoint_accessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_endpoint_accesses.
     */
    data: user_endpoint_accessCreateManyInput | user_endpoint_accessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_endpoint_access update
   */
  export type user_endpoint_accessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * The data needed to update a user_endpoint_access.
     */
    data: XOR<user_endpoint_accessUpdateInput, user_endpoint_accessUncheckedUpdateInput>
    /**
     * Choose, which user_endpoint_access to update.
     */
    where: user_endpoint_accessWhereUniqueInput
  }

  /**
   * user_endpoint_access updateMany
   */
  export type user_endpoint_accessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_endpoint_accesses.
     */
    data: XOR<user_endpoint_accessUpdateManyMutationInput, user_endpoint_accessUncheckedUpdateManyInput>
    /**
     * Filter which user_endpoint_accesses to update
     */
    where?: user_endpoint_accessWhereInput
    /**
     * Limit how many user_endpoint_accesses to update.
     */
    limit?: number
  }

  /**
   * user_endpoint_access upsert
   */
  export type user_endpoint_accessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * The filter to search for the user_endpoint_access to update in case it exists.
     */
    where: user_endpoint_accessWhereUniqueInput
    /**
     * In case the user_endpoint_access found by the `where` argument doesn't exist, create a new user_endpoint_access with this data.
     */
    create: XOR<user_endpoint_accessCreateInput, user_endpoint_accessUncheckedCreateInput>
    /**
     * In case the user_endpoint_access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_endpoint_accessUpdateInput, user_endpoint_accessUncheckedUpdateInput>
  }

  /**
   * user_endpoint_access delete
   */
  export type user_endpoint_accessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
    /**
     * Filter which user_endpoint_access to delete.
     */
    where: user_endpoint_accessWhereUniqueInput
  }

  /**
   * user_endpoint_access deleteMany
   */
  export type user_endpoint_accessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_endpoint_accesses to delete
     */
    where?: user_endpoint_accessWhereInput
    /**
     * Limit how many user_endpoint_accesses to delete.
     */
    limit?: number
  }

  /**
   * user_endpoint_access without action
   */
  export type user_endpoint_accessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_endpoint_access
     */
    select?: user_endpoint_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_endpoint_access
     */
    omit?: user_endpoint_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_endpoint_accessInclude<ExtArgs> | null
  }


  /**
   * Model challenge_submissions
   */

  export type AggregateChallenge_submissions = {
    _count: Challenge_submissionsCountAggregateOutputType | null
    _avg: Challenge_submissionsAvgAggregateOutputType | null
    _sum: Challenge_submissionsSumAggregateOutputType | null
    _min: Challenge_submissionsMinAggregateOutputType | null
    _max: Challenge_submissionsMaxAggregateOutputType | null
  }

  export type Challenge_submissionsAvgAggregateOutputType = {
    ai_confidence: number | null
  }

  export type Challenge_submissionsSumAggregateOutputType = {
    ai_confidence: number | null
  }

  export type Challenge_submissionsMinAggregateOutputType = {
    uuid: string | null
    user_task_id: string | null
    image_path: string | null
    ai_verdict: string | null
    ai_confidence: number | null
    ai_reasoning: string | null
    submitted_at: Date | null
  }

  export type Challenge_submissionsMaxAggregateOutputType = {
    uuid: string | null
    user_task_id: string | null
    image_path: string | null
    ai_verdict: string | null
    ai_confidence: number | null
    ai_reasoning: string | null
    submitted_at: Date | null
  }

  export type Challenge_submissionsCountAggregateOutputType = {
    uuid: number
    user_task_id: number
    image_path: number
    ai_verdict: number
    ai_confidence: number
    ai_reasoning: number
    submitted_at: number
    _all: number
  }


  export type Challenge_submissionsAvgAggregateInputType = {
    ai_confidence?: true
  }

  export type Challenge_submissionsSumAggregateInputType = {
    ai_confidence?: true
  }

  export type Challenge_submissionsMinAggregateInputType = {
    uuid?: true
    user_task_id?: true
    image_path?: true
    ai_verdict?: true
    ai_confidence?: true
    ai_reasoning?: true
    submitted_at?: true
  }

  export type Challenge_submissionsMaxAggregateInputType = {
    uuid?: true
    user_task_id?: true
    image_path?: true
    ai_verdict?: true
    ai_confidence?: true
    ai_reasoning?: true
    submitted_at?: true
  }

  export type Challenge_submissionsCountAggregateInputType = {
    uuid?: true
    user_task_id?: true
    image_path?: true
    ai_verdict?: true
    ai_confidence?: true
    ai_reasoning?: true
    submitted_at?: true
    _all?: true
  }

  export type Challenge_submissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge_submissions to aggregate.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenge_submissions
    **/
    _count?: true | Challenge_submissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Challenge_submissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Challenge_submissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Challenge_submissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Challenge_submissionsMaxAggregateInputType
  }

  export type GetChallenge_submissionsAggregateType<T extends Challenge_submissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge_submissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge_submissions[P]>
      : GetScalarType<T[P], AggregateChallenge_submissions[P]>
  }




  export type challenge_submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_submissionsWhereInput
    orderBy?: challenge_submissionsOrderByWithAggregationInput | challenge_submissionsOrderByWithAggregationInput[]
    by: Challenge_submissionsScalarFieldEnum[] | Challenge_submissionsScalarFieldEnum
    having?: challenge_submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Challenge_submissionsCountAggregateInputType | true
    _avg?: Challenge_submissionsAvgAggregateInputType
    _sum?: Challenge_submissionsSumAggregateInputType
    _min?: Challenge_submissionsMinAggregateInputType
    _max?: Challenge_submissionsMaxAggregateInputType
  }

  export type Challenge_submissionsGroupByOutputType = {
    uuid: string
    user_task_id: string
    image_path: string
    ai_verdict: string
    ai_confidence: number | null
    ai_reasoning: string | null
    submitted_at: Date
    _count: Challenge_submissionsCountAggregateOutputType | null
    _avg: Challenge_submissionsAvgAggregateOutputType | null
    _sum: Challenge_submissionsSumAggregateOutputType | null
    _min: Challenge_submissionsMinAggregateOutputType | null
    _max: Challenge_submissionsMaxAggregateOutputType | null
  }

  type GetChallenge_submissionsGroupByPayload<T extends challenge_submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Challenge_submissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Challenge_submissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Challenge_submissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Challenge_submissionsGroupByOutputType[P]>
        }
      >
    >


  export type challenge_submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    user_task_id?: boolean
    image_path?: boolean
    ai_verdict?: boolean
    ai_confidence?: boolean
    ai_reasoning?: boolean
    submitted_at?: boolean
    user_tasks?: boolean | user_tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_submissions"]>



  export type challenge_submissionsSelectScalar = {
    uuid?: boolean
    user_task_id?: boolean
    image_path?: boolean
    ai_verdict?: boolean
    ai_confidence?: boolean
    ai_reasoning?: boolean
    submitted_at?: boolean
  }

  export type challenge_submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "user_task_id" | "image_path" | "ai_verdict" | "ai_confidence" | "ai_reasoning" | "submitted_at", ExtArgs["result"]["challenge_submissions"]>
  export type challenge_submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_tasks?: boolean | user_tasksDefaultArgs<ExtArgs>
  }

  export type $challenge_submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenge_submissions"
    objects: {
      user_tasks: Prisma.$user_tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      user_task_id: string
      image_path: string
      ai_verdict: string
      ai_confidence: number | null
      ai_reasoning: string | null
      submitted_at: Date
    }, ExtArgs["result"]["challenge_submissions"]>
    composites: {}
  }

  type challenge_submissionsGetPayload<S extends boolean | null | undefined | challenge_submissionsDefaultArgs> = $Result.GetResult<Prisma.$challenge_submissionsPayload, S>

  type challenge_submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challenge_submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Challenge_submissionsCountAggregateInputType | true
    }

  export interface challenge_submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenge_submissions'], meta: { name: 'challenge_submissions' } }
    /**
     * Find zero or one Challenge_submissions that matches the filter.
     * @param {challenge_submissionsFindUniqueArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challenge_submissionsFindUniqueArgs>(args: SelectSubset<T, challenge_submissionsFindUniqueArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge_submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challenge_submissionsFindUniqueOrThrowArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challenge_submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, challenge_submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsFindFirstArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challenge_submissionsFindFirstArgs>(args?: SelectSubset<T, challenge_submissionsFindFirstArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge_submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsFindFirstOrThrowArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challenge_submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, challenge_submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenge_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findMany()
     * 
     * // Get first 10 Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const challenge_submissionsWithUuidOnly = await prisma.challenge_submissions.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends challenge_submissionsFindManyArgs>(args?: SelectSubset<T, challenge_submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge_submissions.
     * @param {challenge_submissionsCreateArgs} args - Arguments to create a Challenge_submissions.
     * @example
     * // Create one Challenge_submissions
     * const Challenge_submissions = await prisma.challenge_submissions.create({
     *   data: {
     *     // ... data to create a Challenge_submissions
     *   }
     * })
     * 
     */
    create<T extends challenge_submissionsCreateArgs>(args: SelectSubset<T, challenge_submissionsCreateArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenge_submissions.
     * @param {challenge_submissionsCreateManyArgs} args - Arguments to create many Challenge_submissions.
     * @example
     * // Create many Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challenge_submissionsCreateManyArgs>(args?: SelectSubset<T, challenge_submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Challenge_submissions.
     * @param {challenge_submissionsDeleteArgs} args - Arguments to delete one Challenge_submissions.
     * @example
     * // Delete one Challenge_submissions
     * const Challenge_submissions = await prisma.challenge_submissions.delete({
     *   where: {
     *     // ... filter to delete one Challenge_submissions
     *   }
     * })
     * 
     */
    delete<T extends challenge_submissionsDeleteArgs>(args: SelectSubset<T, challenge_submissionsDeleteArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge_submissions.
     * @param {challenge_submissionsUpdateArgs} args - Arguments to update one Challenge_submissions.
     * @example
     * // Update one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challenge_submissionsUpdateArgs>(args: SelectSubset<T, challenge_submissionsUpdateArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenge_submissions.
     * @param {challenge_submissionsDeleteManyArgs} args - Arguments to filter Challenge_submissions to delete.
     * @example
     * // Delete a few Challenge_submissions
     * const { count } = await prisma.challenge_submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challenge_submissionsDeleteManyArgs>(args?: SelectSubset<T, challenge_submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challenge_submissionsUpdateManyArgs>(args: SelectSubset<T, challenge_submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenge_submissions.
     * @param {challenge_submissionsUpsertArgs} args - Arguments to update or create a Challenge_submissions.
     * @example
     * // Update or create a Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.upsert({
     *   create: {
     *     // ... data to create a Challenge_submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge_submissions we want to update
     *   }
     * })
     */
    upsert<T extends challenge_submissionsUpsertArgs>(args: SelectSubset<T, challenge_submissionsUpsertArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsCountArgs} args - Arguments to filter Challenge_submissions to count.
     * @example
     * // Count the number of Challenge_submissions
     * const count = await prisma.challenge_submissions.count({
     *   where: {
     *     // ... the filter for the Challenge_submissions we want to count
     *   }
     * })
    **/
    count<T extends challenge_submissionsCountArgs>(
      args?: Subset<T, challenge_submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Challenge_submissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Challenge_submissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Challenge_submissionsAggregateArgs>(args: Subset<T, Challenge_submissionsAggregateArgs>): Prisma.PrismaPromise<GetChallenge_submissionsAggregateType<T>>

    /**
     * Group by Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsGroupByArgs} args - Group by arguments.
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
      T extends challenge_submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challenge_submissionsGroupByArgs['orderBy'] }
        : { orderBy?: challenge_submissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, challenge_submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallenge_submissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenge_submissions model
   */
  readonly fields: challenge_submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenge_submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challenge_submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_tasks<T extends user_tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_tasksDefaultArgs<ExtArgs>>): Prisma__user_tasksClient<$Result.GetResult<Prisma.$user_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the challenge_submissions model
   */
  interface challenge_submissionsFieldRefs {
    readonly uuid: FieldRef<"challenge_submissions", 'String'>
    readonly user_task_id: FieldRef<"challenge_submissions", 'String'>
    readonly image_path: FieldRef<"challenge_submissions", 'String'>
    readonly ai_verdict: FieldRef<"challenge_submissions", 'String'>
    readonly ai_confidence: FieldRef<"challenge_submissions", 'Float'>
    readonly ai_reasoning: FieldRef<"challenge_submissions", 'String'>
    readonly submitted_at: FieldRef<"challenge_submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * challenge_submissions findUnique
   */
  export type challenge_submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions findUniqueOrThrow
   */
  export type challenge_submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions findFirst
   */
  export type challenge_submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenge_submissions.
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenge_submissions.
     */
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenge_submissions findFirstOrThrow
   */
  export type challenge_submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenge_submissions.
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenge_submissions.
     */
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenge_submissions findMany
   */
  export type challenge_submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenge_submissions.
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenge_submissions create
   */
  export type challenge_submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a challenge_submissions.
     */
    data: XOR<challenge_submissionsCreateInput, challenge_submissionsUncheckedCreateInput>
  }

  /**
   * challenge_submissions createMany
   */
  export type challenge_submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenge_submissions.
     */
    data: challenge_submissionsCreateManyInput | challenge_submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * challenge_submissions update
   */
  export type challenge_submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a challenge_submissions.
     */
    data: XOR<challenge_submissionsUpdateInput, challenge_submissionsUncheckedUpdateInput>
    /**
     * Choose, which challenge_submissions to update.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions updateMany
   */
  export type challenge_submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenge_submissions.
     */
    data: XOR<challenge_submissionsUpdateManyMutationInput, challenge_submissionsUncheckedUpdateManyInput>
    /**
     * Filter which challenge_submissions to update
     */
    where?: challenge_submissionsWhereInput
    /**
     * Limit how many challenge_submissions to update.
     */
    limit?: number
  }

  /**
   * challenge_submissions upsert
   */
  export type challenge_submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the challenge_submissions to update in case it exists.
     */
    where: challenge_submissionsWhereUniqueInput
    /**
     * In case the challenge_submissions found by the `where` argument doesn't exist, create a new challenge_submissions with this data.
     */
    create: XOR<challenge_submissionsCreateInput, challenge_submissionsUncheckedCreateInput>
    /**
     * In case the challenge_submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challenge_submissionsUpdateInput, challenge_submissionsUncheckedUpdateInput>
  }

  /**
   * challenge_submissions delete
   */
  export type challenge_submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter which challenge_submissions to delete.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions deleteMany
   */
  export type challenge_submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge_submissions to delete
     */
    where?: challenge_submissionsWhereInput
    /**
     * Limit how many challenge_submissions to delete.
     */
    limit?: number
  }

  /**
   * challenge_submissions without action
   */
  export type challenge_submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsMinAggregateOutputType = {
    uuid: string | null
    user_id: string | null
    type: string | null
    title: string | null
    description: string | null
    priority: string | null
    status: string | null
    created_at: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    uuid: string | null
    user_id: string | null
    type: string | null
    title: string | null
    description: string | null
    priority: string | null
    status: string | null
    created_at: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    uuid: number
    user_id: number
    type: number
    title: number
    description: number
    priority: number
    status: number
    created_at: number
    _all: number
  }


  export type TicketsMinAggregateInputType = {
    uuid?: true
    user_id?: true
    type?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    created_at?: true
  }

  export type TicketsMaxAggregateInputType = {
    uuid?: true
    user_id?: true
    type?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    created_at?: true
  }

  export type TicketsCountAggregateInputType = {
    uuid?: true
    user_id?: true
    type?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    uuid: string
    user_id: string
    type: string
    title: string
    description: string
    priority: string
    status: string
    created_at: Date
    _count: TicketsCountAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>



  export type ticketsSelectScalar = {
    uuid?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "user_id" | "type" | "title" | "description" | "priority" | "status" | "created_at", ExtArgs["result"]["tickets"]>
  export type ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      user_id: string
      type: string
      title: string
      description: string
      priority: string
      status: string
      created_at: Date
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const ticketsWithUuidOnly = await prisma.tickets.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
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
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tickets model
   */
  interface ticketsFieldRefs {
    readonly uuid: FieldRef<"tickets", 'String'>
    readonly user_id: FieldRef<"tickets", 'String'>
    readonly type: FieldRef<"tickets", 'String'>
    readonly title: FieldRef<"tickets", 'String'>
    readonly description: FieldRef<"tickets", 'String'>
    readonly priority: FieldRef<"tickets", 'String'>
    readonly status: FieldRef<"tickets", 'String'>
    readonly created_at: FieldRef<"tickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
  }


  /**
   * Model page_views
   */

  export type AggregatePage_views = {
    _count: Page_viewsCountAggregateOutputType | null
    _avg: Page_viewsAvgAggregateOutputType | null
    _sum: Page_viewsSumAggregateOutputType | null
    _min: Page_viewsMinAggregateOutputType | null
    _max: Page_viewsMaxAggregateOutputType | null
  }

  export type Page_viewsAvgAggregateOutputType = {
    count: number | null
  }

  export type Page_viewsSumAggregateOutputType = {
    count: number | null
  }

  export type Page_viewsMinAggregateOutputType = {
    uuid: string | null
    date: Date | null
    count: number | null
  }

  export type Page_viewsMaxAggregateOutputType = {
    uuid: string | null
    date: Date | null
    count: number | null
  }

  export type Page_viewsCountAggregateOutputType = {
    uuid: number
    date: number
    count: number
    _all: number
  }


  export type Page_viewsAvgAggregateInputType = {
    count?: true
  }

  export type Page_viewsSumAggregateInputType = {
    count?: true
  }

  export type Page_viewsMinAggregateInputType = {
    uuid?: true
    date?: true
    count?: true
  }

  export type Page_viewsMaxAggregateInputType = {
    uuid?: true
    date?: true
    count?: true
  }

  export type Page_viewsCountAggregateInputType = {
    uuid?: true
    date?: true
    count?: true
    _all?: true
  }

  export type Page_viewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which page_views to aggregate.
     */
    where?: page_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of page_views to fetch.
     */
    orderBy?: page_viewsOrderByWithRelationInput | page_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: page_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` page_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` page_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned page_views
    **/
    _count?: true | Page_viewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Page_viewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Page_viewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page_viewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page_viewsMaxAggregateInputType
  }

  export type GetPage_viewsAggregateType<T extends Page_viewsAggregateArgs> = {
        [P in keyof T & keyof AggregatePage_views]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage_views[P]>
      : GetScalarType<T[P], AggregatePage_views[P]>
  }




  export type page_viewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: page_viewsWhereInput
    orderBy?: page_viewsOrderByWithAggregationInput | page_viewsOrderByWithAggregationInput[]
    by: Page_viewsScalarFieldEnum[] | Page_viewsScalarFieldEnum
    having?: page_viewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page_viewsCountAggregateInputType | true
    _avg?: Page_viewsAvgAggregateInputType
    _sum?: Page_viewsSumAggregateInputType
    _min?: Page_viewsMinAggregateInputType
    _max?: Page_viewsMaxAggregateInputType
  }

  export type Page_viewsGroupByOutputType = {
    uuid: string
    date: Date
    count: number
    _count: Page_viewsCountAggregateOutputType | null
    _avg: Page_viewsAvgAggregateOutputType | null
    _sum: Page_viewsSumAggregateOutputType | null
    _min: Page_viewsMinAggregateOutputType | null
    _max: Page_viewsMaxAggregateOutputType | null
  }

  type GetPage_viewsGroupByPayload<T extends page_viewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page_viewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page_viewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page_viewsGroupByOutputType[P]>
            : GetScalarType<T[P], Page_viewsGroupByOutputType[P]>
        }
      >
    >


  export type page_viewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    date?: boolean
    count?: boolean
  }, ExtArgs["result"]["page_views"]>



  export type page_viewsSelectScalar = {
    uuid?: boolean
    date?: boolean
    count?: boolean
  }

  export type page_viewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "date" | "count", ExtArgs["result"]["page_views"]>

  export type $page_viewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "page_views"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      date: Date
      count: number
    }, ExtArgs["result"]["page_views"]>
    composites: {}
  }

  type page_viewsGetPayload<S extends boolean | null | undefined | page_viewsDefaultArgs> = $Result.GetResult<Prisma.$page_viewsPayload, S>

  type page_viewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<page_viewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Page_viewsCountAggregateInputType | true
    }

  export interface page_viewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['page_views'], meta: { name: 'page_views' } }
    /**
     * Find zero or one Page_views that matches the filter.
     * @param {page_viewsFindUniqueArgs} args - Arguments to find a Page_views
     * @example
     * // Get one Page_views
     * const page_views = await prisma.page_views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends page_viewsFindUniqueArgs>(args: SelectSubset<T, page_viewsFindUniqueArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page_views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {page_viewsFindUniqueOrThrowArgs} args - Arguments to find a Page_views
     * @example
     * // Get one Page_views
     * const page_views = await prisma.page_views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends page_viewsFindUniqueOrThrowArgs>(args: SelectSubset<T, page_viewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page_views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {page_viewsFindFirstArgs} args - Arguments to find a Page_views
     * @example
     * // Get one Page_views
     * const page_views = await prisma.page_views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends page_viewsFindFirstArgs>(args?: SelectSubset<T, page_viewsFindFirstArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page_views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {page_viewsFindFirstOrThrowArgs} args - Arguments to find a Page_views
     * @example
     * // Get one Page_views
     * const page_views = await prisma.page_views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends page_viewsFindFirstOrThrowArgs>(args?: SelectSubset<T, page_viewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Page_views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {page_viewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page_views
     * const page_views = await prisma.page_views.findMany()
     * 
     * // Get first 10 Page_views
     * const page_views = await prisma.page_views.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const page_viewsWithUuidOnly = await prisma.page_views.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends page_viewsFindManyArgs>(args?: SelectSubset<T, page_viewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page_views.
     * @param {page_viewsCreateArgs} args - Arguments to create a Page_views.
     * @example
     * // Create one Page_views
     * const Page_views = await prisma.page_views.create({
     *   data: {
     *     // ... data to create a Page_views
     *   }
     * })
     * 
     */
    create<T extends page_viewsCreateArgs>(args: SelectSubset<T, page_viewsCreateArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Page_views.
     * @param {page_viewsCreateManyArgs} args - Arguments to create many Page_views.
     * @example
     * // Create many Page_views
     * const page_views = await prisma.page_views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends page_viewsCreateManyArgs>(args?: SelectSubset<T, page_viewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page_views.
     * @param {page_viewsDeleteArgs} args - Arguments to delete one Page_views.
     * @example
     * // Delete one Page_views
     * const Page_views = await prisma.page_views.delete({
     *   where: {
     *     // ... filter to delete one Page_views
     *   }
     * })
     * 
     */
    delete<T extends page_viewsDeleteArgs>(args: SelectSubset<T, page_viewsDeleteArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page_views.
     * @param {page_viewsUpdateArgs} args - Arguments to update one Page_views.
     * @example
     * // Update one Page_views
     * const page_views = await prisma.page_views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends page_viewsUpdateArgs>(args: SelectSubset<T, page_viewsUpdateArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Page_views.
     * @param {page_viewsDeleteManyArgs} args - Arguments to filter Page_views to delete.
     * @example
     * // Delete a few Page_views
     * const { count } = await prisma.page_views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends page_viewsDeleteManyArgs>(args?: SelectSubset<T, page_viewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {page_viewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page_views
     * const page_views = await prisma.page_views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends page_viewsUpdateManyArgs>(args: SelectSubset<T, page_viewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page_views.
     * @param {page_viewsUpsertArgs} args - Arguments to update or create a Page_views.
     * @example
     * // Update or create a Page_views
     * const page_views = await prisma.page_views.upsert({
     *   create: {
     *     // ... data to create a Page_views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page_views we want to update
     *   }
     * })
     */
    upsert<T extends page_viewsUpsertArgs>(args: SelectSubset<T, page_viewsUpsertArgs<ExtArgs>>): Prisma__page_viewsClient<$Result.GetResult<Prisma.$page_viewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Page_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {page_viewsCountArgs} args - Arguments to filter Page_views to count.
     * @example
     * // Count the number of Page_views
     * const count = await prisma.page_views.count({
     *   where: {
     *     // ... the filter for the Page_views we want to count
     *   }
     * })
    **/
    count<T extends page_viewsCountArgs>(
      args?: Subset<T, page_viewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page_viewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page_viewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Page_viewsAggregateArgs>(args: Subset<T, Page_viewsAggregateArgs>): Prisma.PrismaPromise<GetPage_viewsAggregateType<T>>

    /**
     * Group by Page_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {page_viewsGroupByArgs} args - Group by arguments.
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
      T extends page_viewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: page_viewsGroupByArgs['orderBy'] }
        : { orderBy?: page_viewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, page_viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage_viewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the page_views model
   */
  readonly fields: page_viewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for page_views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__page_viewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the page_views model
   */
  interface page_viewsFieldRefs {
    readonly uuid: FieldRef<"page_views", 'String'>
    readonly date: FieldRef<"page_views", 'DateTime'>
    readonly count: FieldRef<"page_views", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * page_views findUnique
   */
  export type page_viewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * Filter, which page_views to fetch.
     */
    where: page_viewsWhereUniqueInput
  }

  /**
   * page_views findUniqueOrThrow
   */
  export type page_viewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * Filter, which page_views to fetch.
     */
    where: page_viewsWhereUniqueInput
  }

  /**
   * page_views findFirst
   */
  export type page_viewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * Filter, which page_views to fetch.
     */
    where?: page_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of page_views to fetch.
     */
    orderBy?: page_viewsOrderByWithRelationInput | page_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for page_views.
     */
    cursor?: page_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` page_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` page_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of page_views.
     */
    distinct?: Page_viewsScalarFieldEnum | Page_viewsScalarFieldEnum[]
  }

  /**
   * page_views findFirstOrThrow
   */
  export type page_viewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * Filter, which page_views to fetch.
     */
    where?: page_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of page_views to fetch.
     */
    orderBy?: page_viewsOrderByWithRelationInput | page_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for page_views.
     */
    cursor?: page_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` page_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` page_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of page_views.
     */
    distinct?: Page_viewsScalarFieldEnum | Page_viewsScalarFieldEnum[]
  }

  /**
   * page_views findMany
   */
  export type page_viewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * Filter, which page_views to fetch.
     */
    where?: page_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of page_views to fetch.
     */
    orderBy?: page_viewsOrderByWithRelationInput | page_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing page_views.
     */
    cursor?: page_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` page_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` page_views.
     */
    skip?: number
    distinct?: Page_viewsScalarFieldEnum | Page_viewsScalarFieldEnum[]
  }

  /**
   * page_views create
   */
  export type page_viewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * The data needed to create a page_views.
     */
    data: XOR<page_viewsCreateInput, page_viewsUncheckedCreateInput>
  }

  /**
   * page_views createMany
   */
  export type page_viewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many page_views.
     */
    data: page_viewsCreateManyInput | page_viewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * page_views update
   */
  export type page_viewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * The data needed to update a page_views.
     */
    data: XOR<page_viewsUpdateInput, page_viewsUncheckedUpdateInput>
    /**
     * Choose, which page_views to update.
     */
    where: page_viewsWhereUniqueInput
  }

  /**
   * page_views updateMany
   */
  export type page_viewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update page_views.
     */
    data: XOR<page_viewsUpdateManyMutationInput, page_viewsUncheckedUpdateManyInput>
    /**
     * Filter which page_views to update
     */
    where?: page_viewsWhereInput
    /**
     * Limit how many page_views to update.
     */
    limit?: number
  }

  /**
   * page_views upsert
   */
  export type page_viewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * The filter to search for the page_views to update in case it exists.
     */
    where: page_viewsWhereUniqueInput
    /**
     * In case the page_views found by the `where` argument doesn't exist, create a new page_views with this data.
     */
    create: XOR<page_viewsCreateInput, page_viewsUncheckedCreateInput>
    /**
     * In case the page_views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<page_viewsUpdateInput, page_viewsUncheckedUpdateInput>
  }

  /**
   * page_views delete
   */
  export type page_viewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
    /**
     * Filter which page_views to delete.
     */
    where: page_viewsWhereUniqueInput
  }

  /**
   * page_views deleteMany
   */
  export type page_viewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which page_views to delete
     */
    where?: page_viewsWhereInput
    /**
     * Limit how many page_views to delete.
     */
    limit?: number
  }

  /**
   * page_views without action
   */
  export type page_viewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page_views
     */
    select?: page_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page_views
     */
    omit?: page_viewsOmit<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    uuid: 'uuid',
    type: 'type',
    name: 'name',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    xp: 'xp',
    coin: 'coin',
    difficulty: 'difficulty',
    categories_id: 'categories_id',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const User_interestsScalarFieldEnum: {
    uuid: 'uuid',
    user_id: 'user_id',
    category_id: 'category_id',
    created_at: 'created_at'
  };

  export type User_interestsScalarFieldEnum = (typeof User_interestsScalarFieldEnum)[keyof typeof User_interestsScalarFieldEnum]


  export const User_tasksScalarFieldEnum: {
    uuid: 'uuid',
    status: 'status',
    task_id: 'task_id',
    user_id: 'user_id',
    created_at: 'created_at',
    completed_at: 'completed_at'
  };

  export type User_tasksScalarFieldEnum = (typeof User_tasksScalarFieldEnum)[keyof typeof User_tasksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    uuid: 'uuid',
    username: 'username',
    email: 'email',
    password: 'password',
    xp: 'xp',
    coin: 'coin',
    admin: 'admin',
    registered_at: 'registered_at',
    onboarding_completed: 'onboarding_completed',
    activity_level: 'activity_level',
    current_streak: 'current_streak',
    last_completed_at: 'last_completed_at',
    longest_streak: 'longest_streak',
    active_border_id: 'active_border_id',
    active_name_color_id: 'active_name_color_id',
    is_banned: 'is_banned'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Shop_itemsScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    created_at: 'created_at',
    value: 'value'
  };

  export type Shop_itemsScalarFieldEnum = (typeof Shop_itemsScalarFieldEnum)[keyof typeof Shop_itemsScalarFieldEnum]


  export const User_shop_itemsScalarFieldEnum: {
    uuid: 'uuid',
    user_id: 'user_id',
    shop_item_id: 'shop_item_id',
    purchased_at: 'purchased_at'
  };

  export type User_shop_itemsScalarFieldEnum = (typeof User_shop_itemsScalarFieldEnum)[keyof typeof User_shop_itemsScalarFieldEnum]


  export const User_endpoint_accessScalarFieldEnum: {
    uuid: 'uuid',
    endpoint: 'endpoint',
    methods: 'methods',
    user_id: 'user_id'
  };

  export type User_endpoint_accessScalarFieldEnum = (typeof User_endpoint_accessScalarFieldEnum)[keyof typeof User_endpoint_accessScalarFieldEnum]


  export const Challenge_submissionsScalarFieldEnum: {
    uuid: 'uuid',
    user_task_id: 'user_task_id',
    image_path: 'image_path',
    ai_verdict: 'ai_verdict',
    ai_confidence: 'ai_confidence',
    ai_reasoning: 'ai_reasoning',
    submitted_at: 'submitted_at'
  };

  export type Challenge_submissionsScalarFieldEnum = (typeof Challenge_submissionsScalarFieldEnum)[keyof typeof Challenge_submissionsScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    uuid: 'uuid',
    user_id: 'user_id',
    type: 'type',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    created_at: 'created_at'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const Page_viewsScalarFieldEnum: {
    uuid: 'uuid',
    date: 'date',
    count: 'count'
  };

  export type Page_viewsScalarFieldEnum = (typeof Page_viewsScalarFieldEnum)[keyof typeof Page_viewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const categoriesOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    type: 'type',
    name: 'name',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const tasksOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    difficulty: 'difficulty',
    categories_id: 'categories_id',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type tasksOrderByRelevanceFieldEnum = (typeof tasksOrderByRelevanceFieldEnum)[keyof typeof tasksOrderByRelevanceFieldEnum]


  export const user_interestsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    user_id: 'user_id',
    category_id: 'category_id'
  };

  export type user_interestsOrderByRelevanceFieldEnum = (typeof user_interestsOrderByRelevanceFieldEnum)[keyof typeof user_interestsOrderByRelevanceFieldEnum]


  export const user_tasksOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    task_id: 'task_id',
    user_id: 'user_id'
  };

  export type user_tasksOrderByRelevanceFieldEnum = (typeof user_tasksOrderByRelevanceFieldEnum)[keyof typeof user_tasksOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    username: 'username',
    email: 'email',
    password: 'password',
    activity_level: 'activity_level',
    active_border_id: 'active_border_id',
    active_name_color_id: 'active_name_color_id'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const shop_itemsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    category: 'category',
    value: 'value'
  };

  export type shop_itemsOrderByRelevanceFieldEnum = (typeof shop_itemsOrderByRelevanceFieldEnum)[keyof typeof shop_itemsOrderByRelevanceFieldEnum]


  export const user_shop_itemsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    user_id: 'user_id',
    shop_item_id: 'shop_item_id'
  };

  export type user_shop_itemsOrderByRelevanceFieldEnum = (typeof user_shop_itemsOrderByRelevanceFieldEnum)[keyof typeof user_shop_itemsOrderByRelevanceFieldEnum]


  export const user_endpoint_accessOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    endpoint: 'endpoint',
    methods: 'methods',
    user_id: 'user_id'
  };

  export type user_endpoint_accessOrderByRelevanceFieldEnum = (typeof user_endpoint_accessOrderByRelevanceFieldEnum)[keyof typeof user_endpoint_accessOrderByRelevanceFieldEnum]


  export const challenge_submissionsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    user_task_id: 'user_task_id',
    image_path: 'image_path',
    ai_verdict: 'ai_verdict',
    ai_reasoning: 'ai_reasoning'
  };

  export type challenge_submissionsOrderByRelevanceFieldEnum = (typeof challenge_submissionsOrderByRelevanceFieldEnum)[keyof typeof challenge_submissionsOrderByRelevanceFieldEnum]


  export const ticketsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    user_id: 'user_id',
    type: 'type',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status'
  };

  export type ticketsOrderByRelevanceFieldEnum = (typeof ticketsOrderByRelevanceFieldEnum)[keyof typeof ticketsOrderByRelevanceFieldEnum]


  export const page_viewsOrderByRelevanceFieldEnum: {
    uuid: 'uuid'
  };

  export type page_viewsOrderByRelevanceFieldEnum = (typeof page_viewsOrderByRelevanceFieldEnum)[keyof typeof page_viewsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    uuid?: StringFilter<"categories"> | string
    type?: StringFilter<"categories"> | string
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    created_by?: StringFilter<"categories"> | string
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_by?: StringNullableFilter<"categories"> | string | null
    users_categories_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_categories_updated_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tasks?: TasksListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    uuid?: SortOrder
    type?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    users_categories_created_byTousers?: usersOrderByWithRelationInput
    users_categories_updated_byTousers?: usersOrderByWithRelationInput
    tasks?: tasksOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    type?: StringFilter<"categories"> | string
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    created_by?: StringFilter<"categories"> | string
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_by?: StringNullableFilter<"categories"> | string | null
    users_categories_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_categories_updated_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tasks?: TasksListRelationFilter
  }, "uuid">

  export type categoriesOrderByWithAggregationInput = {
    uuid?: SortOrder
    type?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"categories"> | string
    type?: StringWithAggregatesFilter<"categories"> | string
    name?: StringWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    created_by?: StringWithAggregatesFilter<"categories"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    updated_by?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    uuid?: StringFilter<"tasks"> | string
    name?: StringFilter<"tasks"> | string
    description?: StringFilter<"tasks"> | string
    xp?: IntFilter<"tasks"> | number
    coin?: IntFilter<"tasks"> | number
    difficulty?: StringFilter<"tasks"> | string
    categories_id?: StringFilter<"tasks"> | string
    created_at?: DateTimeFilter<"tasks"> | Date | string
    created_by?: StringFilter<"tasks"> | string
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_by?: StringNullableFilter<"tasks"> | string | null
    users_tasks_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_tasks_updated_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    user_tasks?: User_tasksListRelationFilter
  }

  export type tasksOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    difficulty?: SortOrder
    categories_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    users_tasks_created_byTousers?: usersOrderByWithRelationInput
    users_tasks_updated_byTousers?: usersOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    user_tasks?: user_tasksOrderByRelationAggregateInput
    _relevance?: tasksOrderByRelevanceInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    name?: StringFilter<"tasks"> | string
    description?: StringFilter<"tasks"> | string
    xp?: IntFilter<"tasks"> | number
    coin?: IntFilter<"tasks"> | number
    difficulty?: StringFilter<"tasks"> | string
    categories_id?: StringFilter<"tasks"> | string
    created_at?: DateTimeFilter<"tasks"> | Date | string
    created_by?: StringFilter<"tasks"> | string
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_by?: StringNullableFilter<"tasks"> | string | null
    users_tasks_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_tasks_updated_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    user_tasks?: User_tasksListRelationFilter
  }, "uuid">

  export type tasksOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    difficulty?: SortOrder
    categories_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"tasks"> | string
    name?: StringWithAggregatesFilter<"tasks"> | string
    description?: StringWithAggregatesFilter<"tasks"> | string
    xp?: IntWithAggregatesFilter<"tasks"> | number
    coin?: IntWithAggregatesFilter<"tasks"> | number
    difficulty?: StringWithAggregatesFilter<"tasks"> | string
    categories_id?: StringWithAggregatesFilter<"tasks"> | string
    created_at?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
    created_by?: StringWithAggregatesFilter<"tasks"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    updated_by?: StringNullableWithAggregatesFilter<"tasks"> | string | null
  }

  export type user_interestsWhereInput = {
    AND?: user_interestsWhereInput | user_interestsWhereInput[]
    OR?: user_interestsWhereInput[]
    NOT?: user_interestsWhereInput | user_interestsWhereInput[]
    uuid?: StringFilter<"user_interests"> | string
    user_id?: StringFilter<"user_interests"> | string
    category_id?: StringFilter<"user_interests"> | string
    created_at?: DateTimeFilter<"user_interests"> | Date | string
  }

  export type user_interestsOrderByWithRelationInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    _relevance?: user_interestsOrderByRelevanceInput
  }

  export type user_interestsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    user_id_category_id?: user_interestsUser_idCategory_idCompoundUniqueInput
    AND?: user_interestsWhereInput | user_interestsWhereInput[]
    OR?: user_interestsWhereInput[]
    NOT?: user_interestsWhereInput | user_interestsWhereInput[]
    user_id?: StringFilter<"user_interests"> | string
    category_id?: StringFilter<"user_interests"> | string
    created_at?: DateTimeFilter<"user_interests"> | Date | string
  }, "uuid" | "user_id_category_id">

  export type user_interestsOrderByWithAggregationInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    _count?: user_interestsCountOrderByAggregateInput
    _max?: user_interestsMaxOrderByAggregateInput
    _min?: user_interestsMinOrderByAggregateInput
  }

  export type user_interestsScalarWhereWithAggregatesInput = {
    AND?: user_interestsScalarWhereWithAggregatesInput | user_interestsScalarWhereWithAggregatesInput[]
    OR?: user_interestsScalarWhereWithAggregatesInput[]
    NOT?: user_interestsScalarWhereWithAggregatesInput | user_interestsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"user_interests"> | string
    user_id?: StringWithAggregatesFilter<"user_interests"> | string
    category_id?: StringWithAggregatesFilter<"user_interests"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_interests"> | Date | string
  }

  export type user_tasksWhereInput = {
    AND?: user_tasksWhereInput | user_tasksWhereInput[]
    OR?: user_tasksWhereInput[]
    NOT?: user_tasksWhereInput | user_tasksWhereInput[]
    uuid?: StringFilter<"user_tasks"> | string
    status?: IntFilter<"user_tasks"> | number
    task_id?: StringFilter<"user_tasks"> | string
    user_id?: StringFilter<"user_tasks"> | string
    created_at?: DateTimeFilter<"user_tasks"> | Date | string
    completed_at?: DateTimeNullableFilter<"user_tasks"> | Date | string | null
    challenge_submissions?: Challenge_submissionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }

  export type user_tasksOrderByWithRelationInput = {
    uuid?: SortOrder
    status?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    challenge_submissions?: challenge_submissionsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    tasks?: tasksOrderByWithRelationInput
    _relevance?: user_tasksOrderByRelevanceInput
  }

  export type user_tasksWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: user_tasksWhereInput | user_tasksWhereInput[]
    OR?: user_tasksWhereInput[]
    NOT?: user_tasksWhereInput | user_tasksWhereInput[]
    status?: IntFilter<"user_tasks"> | number
    task_id?: StringFilter<"user_tasks"> | string
    user_id?: StringFilter<"user_tasks"> | string
    created_at?: DateTimeFilter<"user_tasks"> | Date | string
    completed_at?: DateTimeNullableFilter<"user_tasks"> | Date | string | null
    challenge_submissions?: Challenge_submissionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }, "uuid">

  export type user_tasksOrderByWithAggregationInput = {
    uuid?: SortOrder
    status?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: user_tasksCountOrderByAggregateInput
    _avg?: user_tasksAvgOrderByAggregateInput
    _max?: user_tasksMaxOrderByAggregateInput
    _min?: user_tasksMinOrderByAggregateInput
    _sum?: user_tasksSumOrderByAggregateInput
  }

  export type user_tasksScalarWhereWithAggregatesInput = {
    AND?: user_tasksScalarWhereWithAggregatesInput | user_tasksScalarWhereWithAggregatesInput[]
    OR?: user_tasksScalarWhereWithAggregatesInput[]
    NOT?: user_tasksScalarWhereWithAggregatesInput | user_tasksScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"user_tasks"> | string
    status?: IntWithAggregatesFilter<"user_tasks"> | number
    task_id?: StringWithAggregatesFilter<"user_tasks"> | string
    user_id?: StringWithAggregatesFilter<"user_tasks"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_tasks"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"user_tasks"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    uuid?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    xp?: IntFilter<"users"> | number
    coin?: IntFilter<"users"> | number
    admin?: IntFilter<"users"> | number
    registered_at?: DateTimeFilter<"users"> | Date | string
    onboarding_completed?: BoolFilter<"users"> | boolean
    activity_level?: StringNullableFilter<"users"> | string | null
    current_streak?: IntFilter<"users"> | number
    last_completed_at?: DateTimeNullableFilter<"users"> | Date | string | null
    longest_streak?: IntFilter<"users"> | number
    active_border_id?: StringNullableFilter<"users"> | string | null
    active_name_color_id?: StringNullableFilter<"users"> | string | null
    is_banned?: BoolFilter<"users"> | boolean
    categories_categories_created_byTousers?: CategoriesListRelationFilter
    categories_categories_updated_byTousers?: CategoriesListRelationFilter
    tasks_tasks_created_byTousers?: TasksListRelationFilter
    tasks_tasks_updated_byTousers?: TasksListRelationFilter
    tickets?: TicketsListRelationFilter
    user_endpoint_access?: User_endpoint_accessListRelationFilter
    user_shop_items?: User_shop_itemsListRelationFilter
    user_tasks?: User_tasksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    registered_at?: SortOrder
    onboarding_completed?: SortOrder
    activity_level?: SortOrderInput | SortOrder
    current_streak?: SortOrder
    last_completed_at?: SortOrderInput | SortOrder
    longest_streak?: SortOrder
    active_border_id?: SortOrderInput | SortOrder
    active_name_color_id?: SortOrderInput | SortOrder
    is_banned?: SortOrder
    categories_categories_created_byTousers?: categoriesOrderByRelationAggregateInput
    categories_categories_updated_byTousers?: categoriesOrderByRelationAggregateInput
    tasks_tasks_created_byTousers?: tasksOrderByRelationAggregateInput
    tasks_tasks_updated_byTousers?: tasksOrderByRelationAggregateInput
    tickets?: ticketsOrderByRelationAggregateInput
    user_endpoint_access?: user_endpoint_accessOrderByRelationAggregateInput
    user_shop_items?: user_shop_itemsOrderByRelationAggregateInput
    user_tasks?: user_tasksOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    xp?: IntFilter<"users"> | number
    coin?: IntFilter<"users"> | number
    admin?: IntFilter<"users"> | number
    registered_at?: DateTimeFilter<"users"> | Date | string
    onboarding_completed?: BoolFilter<"users"> | boolean
    activity_level?: StringNullableFilter<"users"> | string | null
    current_streak?: IntFilter<"users"> | number
    last_completed_at?: DateTimeNullableFilter<"users"> | Date | string | null
    longest_streak?: IntFilter<"users"> | number
    active_border_id?: StringNullableFilter<"users"> | string | null
    active_name_color_id?: StringNullableFilter<"users"> | string | null
    is_banned?: BoolFilter<"users"> | boolean
    categories_categories_created_byTousers?: CategoriesListRelationFilter
    categories_categories_updated_byTousers?: CategoriesListRelationFilter
    tasks_tasks_created_byTousers?: TasksListRelationFilter
    tasks_tasks_updated_byTousers?: TasksListRelationFilter
    tickets?: TicketsListRelationFilter
    user_endpoint_access?: User_endpoint_accessListRelationFilter
    user_shop_items?: User_shop_itemsListRelationFilter
    user_tasks?: User_tasksListRelationFilter
  }, "uuid" | "email">

  export type usersOrderByWithAggregationInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    registered_at?: SortOrder
    onboarding_completed?: SortOrder
    activity_level?: SortOrderInput | SortOrder
    current_streak?: SortOrder
    last_completed_at?: SortOrderInput | SortOrder
    longest_streak?: SortOrder
    active_border_id?: SortOrderInput | SortOrder
    active_name_color_id?: SortOrderInput | SortOrder
    is_banned?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    xp?: IntWithAggregatesFilter<"users"> | number
    coin?: IntWithAggregatesFilter<"users"> | number
    admin?: IntWithAggregatesFilter<"users"> | number
    registered_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    onboarding_completed?: BoolWithAggregatesFilter<"users"> | boolean
    activity_level?: StringNullableWithAggregatesFilter<"users"> | string | null
    current_streak?: IntWithAggregatesFilter<"users"> | number
    last_completed_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    longest_streak?: IntWithAggregatesFilter<"users"> | number
    active_border_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    active_name_color_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_banned?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type shop_itemsWhereInput = {
    AND?: shop_itemsWhereInput | shop_itemsWhereInput[]
    OR?: shop_itemsWhereInput[]
    NOT?: shop_itemsWhereInput | shop_itemsWhereInput[]
    uuid?: StringFilter<"shop_items"> | string
    name?: StringFilter<"shop_items"> | string
    description?: StringFilter<"shop_items"> | string
    price?: IntFilter<"shop_items"> | number
    category?: StringFilter<"shop_items"> | string
    created_at?: DateTimeFilter<"shop_items"> | Date | string
    value?: StringNullableFilter<"shop_items"> | string | null
    user_shop_items?: User_shop_itemsListRelationFilter
  }

  export type shop_itemsOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    value?: SortOrderInput | SortOrder
    user_shop_items?: user_shop_itemsOrderByRelationAggregateInput
    _relevance?: shop_itemsOrderByRelevanceInput
  }

  export type shop_itemsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: shop_itemsWhereInput | shop_itemsWhereInput[]
    OR?: shop_itemsWhereInput[]
    NOT?: shop_itemsWhereInput | shop_itemsWhereInput[]
    name?: StringFilter<"shop_items"> | string
    description?: StringFilter<"shop_items"> | string
    price?: IntFilter<"shop_items"> | number
    category?: StringFilter<"shop_items"> | string
    created_at?: DateTimeFilter<"shop_items"> | Date | string
    value?: StringNullableFilter<"shop_items"> | string | null
    user_shop_items?: User_shop_itemsListRelationFilter
  }, "uuid">

  export type shop_itemsOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: shop_itemsCountOrderByAggregateInput
    _avg?: shop_itemsAvgOrderByAggregateInput
    _max?: shop_itemsMaxOrderByAggregateInput
    _min?: shop_itemsMinOrderByAggregateInput
    _sum?: shop_itemsSumOrderByAggregateInput
  }

  export type shop_itemsScalarWhereWithAggregatesInput = {
    AND?: shop_itemsScalarWhereWithAggregatesInput | shop_itemsScalarWhereWithAggregatesInput[]
    OR?: shop_itemsScalarWhereWithAggregatesInput[]
    NOT?: shop_itemsScalarWhereWithAggregatesInput | shop_itemsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"shop_items"> | string
    name?: StringWithAggregatesFilter<"shop_items"> | string
    description?: StringWithAggregatesFilter<"shop_items"> | string
    price?: IntWithAggregatesFilter<"shop_items"> | number
    category?: StringWithAggregatesFilter<"shop_items"> | string
    created_at?: DateTimeWithAggregatesFilter<"shop_items"> | Date | string
    value?: StringNullableWithAggregatesFilter<"shop_items"> | string | null
  }

  export type user_shop_itemsWhereInput = {
    AND?: user_shop_itemsWhereInput | user_shop_itemsWhereInput[]
    OR?: user_shop_itemsWhereInput[]
    NOT?: user_shop_itemsWhereInput | user_shop_itemsWhereInput[]
    uuid?: StringFilter<"user_shop_items"> | string
    user_id?: StringFilter<"user_shop_items"> | string
    shop_item_id?: StringFilter<"user_shop_items"> | string
    purchased_at?: DateTimeFilter<"user_shop_items"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    shop_items?: XOR<Shop_itemsScalarRelationFilter, shop_itemsWhereInput>
  }

  export type user_shop_itemsOrderByWithRelationInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    shop_item_id?: SortOrder
    purchased_at?: SortOrder
    users?: usersOrderByWithRelationInput
    shop_items?: shop_itemsOrderByWithRelationInput
    _relevance?: user_shop_itemsOrderByRelevanceInput
  }

  export type user_shop_itemsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    user_id_shop_item_id?: user_shop_itemsUser_idShop_item_idCompoundUniqueInput
    AND?: user_shop_itemsWhereInput | user_shop_itemsWhereInput[]
    OR?: user_shop_itemsWhereInput[]
    NOT?: user_shop_itemsWhereInput | user_shop_itemsWhereInput[]
    user_id?: StringFilter<"user_shop_items"> | string
    shop_item_id?: StringFilter<"user_shop_items"> | string
    purchased_at?: DateTimeFilter<"user_shop_items"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    shop_items?: XOR<Shop_itemsScalarRelationFilter, shop_itemsWhereInput>
  }, "uuid" | "user_id_shop_item_id">

  export type user_shop_itemsOrderByWithAggregationInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    shop_item_id?: SortOrder
    purchased_at?: SortOrder
    _count?: user_shop_itemsCountOrderByAggregateInput
    _max?: user_shop_itemsMaxOrderByAggregateInput
    _min?: user_shop_itemsMinOrderByAggregateInput
  }

  export type user_shop_itemsScalarWhereWithAggregatesInput = {
    AND?: user_shop_itemsScalarWhereWithAggregatesInput | user_shop_itemsScalarWhereWithAggregatesInput[]
    OR?: user_shop_itemsScalarWhereWithAggregatesInput[]
    NOT?: user_shop_itemsScalarWhereWithAggregatesInput | user_shop_itemsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"user_shop_items"> | string
    user_id?: StringWithAggregatesFilter<"user_shop_items"> | string
    shop_item_id?: StringWithAggregatesFilter<"user_shop_items"> | string
    purchased_at?: DateTimeWithAggregatesFilter<"user_shop_items"> | Date | string
  }

  export type user_endpoint_accessWhereInput = {
    AND?: user_endpoint_accessWhereInput | user_endpoint_accessWhereInput[]
    OR?: user_endpoint_accessWhereInput[]
    NOT?: user_endpoint_accessWhereInput | user_endpoint_accessWhereInput[]
    uuid?: StringFilter<"user_endpoint_access"> | string
    endpoint?: StringFilter<"user_endpoint_access"> | string
    methods?: StringFilter<"user_endpoint_access"> | string
    user_id?: StringFilter<"user_endpoint_access"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_endpoint_accessOrderByWithRelationInput = {
    uuid?: SortOrder
    endpoint?: SortOrder
    methods?: SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: user_endpoint_accessOrderByRelevanceInput
  }

  export type user_endpoint_accessWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: user_endpoint_accessWhereInput | user_endpoint_accessWhereInput[]
    OR?: user_endpoint_accessWhereInput[]
    NOT?: user_endpoint_accessWhereInput | user_endpoint_accessWhereInput[]
    endpoint?: StringFilter<"user_endpoint_access"> | string
    methods?: StringFilter<"user_endpoint_access"> | string
    user_id?: StringFilter<"user_endpoint_access"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "uuid">

  export type user_endpoint_accessOrderByWithAggregationInput = {
    uuid?: SortOrder
    endpoint?: SortOrder
    methods?: SortOrder
    user_id?: SortOrder
    _count?: user_endpoint_accessCountOrderByAggregateInput
    _max?: user_endpoint_accessMaxOrderByAggregateInput
    _min?: user_endpoint_accessMinOrderByAggregateInput
  }

  export type user_endpoint_accessScalarWhereWithAggregatesInput = {
    AND?: user_endpoint_accessScalarWhereWithAggregatesInput | user_endpoint_accessScalarWhereWithAggregatesInput[]
    OR?: user_endpoint_accessScalarWhereWithAggregatesInput[]
    NOT?: user_endpoint_accessScalarWhereWithAggregatesInput | user_endpoint_accessScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"user_endpoint_access"> | string
    endpoint?: StringWithAggregatesFilter<"user_endpoint_access"> | string
    methods?: StringWithAggregatesFilter<"user_endpoint_access"> | string
    user_id?: StringWithAggregatesFilter<"user_endpoint_access"> | string
  }

  export type challenge_submissionsWhereInput = {
    AND?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    OR?: challenge_submissionsWhereInput[]
    NOT?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    uuid?: StringFilter<"challenge_submissions"> | string
    user_task_id?: StringFilter<"challenge_submissions"> | string
    image_path?: StringFilter<"challenge_submissions"> | string
    ai_verdict?: StringFilter<"challenge_submissions"> | string
    ai_confidence?: FloatNullableFilter<"challenge_submissions"> | number | null
    ai_reasoning?: StringNullableFilter<"challenge_submissions"> | string | null
    submitted_at?: DateTimeFilter<"challenge_submissions"> | Date | string
    user_tasks?: XOR<User_tasksScalarRelationFilter, user_tasksWhereInput>
  }

  export type challenge_submissionsOrderByWithRelationInput = {
    uuid?: SortOrder
    user_task_id?: SortOrder
    image_path?: SortOrder
    ai_verdict?: SortOrder
    ai_confidence?: SortOrderInput | SortOrder
    ai_reasoning?: SortOrderInput | SortOrder
    submitted_at?: SortOrder
    user_tasks?: user_tasksOrderByWithRelationInput
    _relevance?: challenge_submissionsOrderByRelevanceInput
  }

  export type challenge_submissionsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    OR?: challenge_submissionsWhereInput[]
    NOT?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    user_task_id?: StringFilter<"challenge_submissions"> | string
    image_path?: StringFilter<"challenge_submissions"> | string
    ai_verdict?: StringFilter<"challenge_submissions"> | string
    ai_confidence?: FloatNullableFilter<"challenge_submissions"> | number | null
    ai_reasoning?: StringNullableFilter<"challenge_submissions"> | string | null
    submitted_at?: DateTimeFilter<"challenge_submissions"> | Date | string
    user_tasks?: XOR<User_tasksScalarRelationFilter, user_tasksWhereInput>
  }, "uuid">

  export type challenge_submissionsOrderByWithAggregationInput = {
    uuid?: SortOrder
    user_task_id?: SortOrder
    image_path?: SortOrder
    ai_verdict?: SortOrder
    ai_confidence?: SortOrderInput | SortOrder
    ai_reasoning?: SortOrderInput | SortOrder
    submitted_at?: SortOrder
    _count?: challenge_submissionsCountOrderByAggregateInput
    _avg?: challenge_submissionsAvgOrderByAggregateInput
    _max?: challenge_submissionsMaxOrderByAggregateInput
    _min?: challenge_submissionsMinOrderByAggregateInput
    _sum?: challenge_submissionsSumOrderByAggregateInput
  }

  export type challenge_submissionsScalarWhereWithAggregatesInput = {
    AND?: challenge_submissionsScalarWhereWithAggregatesInput | challenge_submissionsScalarWhereWithAggregatesInput[]
    OR?: challenge_submissionsScalarWhereWithAggregatesInput[]
    NOT?: challenge_submissionsScalarWhereWithAggregatesInput | challenge_submissionsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"challenge_submissions"> | string
    user_task_id?: StringWithAggregatesFilter<"challenge_submissions"> | string
    image_path?: StringWithAggregatesFilter<"challenge_submissions"> | string
    ai_verdict?: StringWithAggregatesFilter<"challenge_submissions"> | string
    ai_confidence?: FloatNullableWithAggregatesFilter<"challenge_submissions"> | number | null
    ai_reasoning?: StringNullableWithAggregatesFilter<"challenge_submissions"> | string | null
    submitted_at?: DateTimeWithAggregatesFilter<"challenge_submissions"> | Date | string
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    uuid?: StringFilter<"tickets"> | string
    user_id?: StringFilter<"tickets"> | string
    type?: StringFilter<"tickets"> | string
    title?: StringFilter<"tickets"> | string
    description?: StringFilter<"tickets"> | string
    priority?: StringFilter<"tickets"> | string
    status?: StringFilter<"tickets"> | string
    created_at?: DateTimeFilter<"tickets"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ticketsOrderByWithRelationInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: ticketsOrderByRelevanceInput
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    user_id?: StringFilter<"tickets"> | string
    type?: StringFilter<"tickets"> | string
    title?: StringFilter<"tickets"> | string
    description?: StringFilter<"tickets"> | string
    priority?: StringFilter<"tickets"> | string
    status?: StringFilter<"tickets"> | string
    created_at?: DateTimeFilter<"tickets"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "uuid">

  export type ticketsOrderByWithAggregationInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"tickets"> | string
    user_id?: StringWithAggregatesFilter<"tickets"> | string
    type?: StringWithAggregatesFilter<"tickets"> | string
    title?: StringWithAggregatesFilter<"tickets"> | string
    description?: StringWithAggregatesFilter<"tickets"> | string
    priority?: StringWithAggregatesFilter<"tickets"> | string
    status?: StringWithAggregatesFilter<"tickets"> | string
    created_at?: DateTimeWithAggregatesFilter<"tickets"> | Date | string
  }

  export type page_viewsWhereInput = {
    AND?: page_viewsWhereInput | page_viewsWhereInput[]
    OR?: page_viewsWhereInput[]
    NOT?: page_viewsWhereInput | page_viewsWhereInput[]
    uuid?: StringFilter<"page_views"> | string
    date?: DateTimeFilter<"page_views"> | Date | string
    count?: IntFilter<"page_views"> | number
  }

  export type page_viewsOrderByWithRelationInput = {
    uuid?: SortOrder
    date?: SortOrder
    count?: SortOrder
    _relevance?: page_viewsOrderByRelevanceInput
  }

  export type page_viewsWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    date?: Date | string
    AND?: page_viewsWhereInput | page_viewsWhereInput[]
    OR?: page_viewsWhereInput[]
    NOT?: page_viewsWhereInput | page_viewsWhereInput[]
    count?: IntFilter<"page_views"> | number
  }, "uuid" | "date">

  export type page_viewsOrderByWithAggregationInput = {
    uuid?: SortOrder
    date?: SortOrder
    count?: SortOrder
    _count?: page_viewsCountOrderByAggregateInput
    _avg?: page_viewsAvgOrderByAggregateInput
    _max?: page_viewsMaxOrderByAggregateInput
    _min?: page_viewsMinOrderByAggregateInput
    _sum?: page_viewsSumOrderByAggregateInput
  }

  export type page_viewsScalarWhereWithAggregatesInput = {
    AND?: page_viewsScalarWhereWithAggregatesInput | page_viewsScalarWhereWithAggregatesInput[]
    OR?: page_viewsScalarWhereWithAggregatesInput[]
    NOT?: page_viewsScalarWhereWithAggregatesInput | page_viewsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"page_views"> | string
    date?: DateTimeWithAggregatesFilter<"page_views"> | Date | string
    count?: IntWithAggregatesFilter<"page_views"> | number
  }

  export type categoriesCreateInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    users_categories_updated_byTousers?: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    tasks?: tasksCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    users_categories_updated_byTousers?: usersUpdateOneWithoutCategories_categories_updated_byTousersNestedInput
    tasks?: tasksUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: tasksUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksCreateInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_tasks_created_byTousers: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
    categories: categoriesCreateNestedOneWithoutTasksInput
    user_tasks?: user_tasksCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_tasks_created_byTousers?: usersUpdateOneRequiredWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTasksNestedInput
    user_tasks?: user_tasksUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    user_tasks?: user_tasksUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksCreateManyInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type tasksUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_interestsCreateInput = {
    uuid?: string
    user_id: string
    category_id: string
    created_at?: Date | string
  }

  export type user_interestsUncheckedCreateInput = {
    uuid?: string
    user_id: string
    category_id: string
    created_at?: Date | string
  }

  export type user_interestsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_interestsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_interestsCreateManyInput = {
    uuid?: string
    user_id: string
    category_id: string
    created_at?: Date | string
  }

  export type user_interestsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_interestsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tasksCreateInput = {
    uuid?: string
    status?: number
    created_at?: Date | string
    completed_at?: Date | string | null
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutUser_tasksInput
    users: usersCreateNestedOneWithoutUser_tasksInput
    tasks: tasksCreateNestedOneWithoutUser_tasksInput
  }

  export type user_tasksUncheckedCreateInput = {
    uuid?: string
    status?: number
    task_id: string
    user_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutUser_tasksInput
  }

  export type user_tasksUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge_submissions?: challenge_submissionsUpdateManyWithoutUser_tasksNestedInput
    users?: usersUpdateOneRequiredWithoutUser_tasksNestedInput
    tasks?: tasksUpdateOneRequiredWithoutUser_tasksNestedInput
  }

  export type user_tasksUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutUser_tasksNestedInput
  }

  export type user_tasksCreateManyInput = {
    uuid?: string
    status?: number
    task_id: string
    user_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type user_tasksUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tasksUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
  }

  export type usersUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type shop_itemsCreateInput = {
    uuid?: string
    name: string
    description: string
    price: number
    category: string
    created_at?: Date | string
    value?: string | null
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutShop_itemsInput
  }

  export type shop_itemsUncheckedCreateInput = {
    uuid?: string
    name: string
    description: string
    price: number
    category: string
    created_at?: Date | string
    value?: string | null
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutShop_itemsInput
  }

  export type shop_itemsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    user_shop_items?: user_shop_itemsUpdateManyWithoutShop_itemsNestedInput
  }

  export type shop_itemsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutShop_itemsNestedInput
  }

  export type shop_itemsCreateManyInput = {
    uuid?: string
    name: string
    description: string
    price: number
    category: string
    created_at?: Date | string
    value?: string | null
  }

  export type shop_itemsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shop_itemsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_shop_itemsCreateInput = {
    uuid?: string
    purchased_at?: Date | string
    users: usersCreateNestedOneWithoutUser_shop_itemsInput
    shop_items: shop_itemsCreateNestedOneWithoutUser_shop_itemsInput
  }

  export type user_shop_itemsUncheckedCreateInput = {
    uuid?: string
    user_id: string
    shop_item_id: string
    purchased_at?: Date | string
  }

  export type user_shop_itemsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_shop_itemsNestedInput
    shop_items?: shop_itemsUpdateOneRequiredWithoutUser_shop_itemsNestedInput
  }

  export type user_shop_itemsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    shop_item_id?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_shop_itemsCreateManyInput = {
    uuid?: string
    user_id: string
    shop_item_id: string
    purchased_at?: Date | string
  }

  export type user_shop_itemsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_shop_itemsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    shop_item_id?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_endpoint_accessCreateInput = {
    uuid: string
    endpoint: string
    methods: string
    users: usersCreateNestedOneWithoutUser_endpoint_accessInput
  }

  export type user_endpoint_accessUncheckedCreateInput = {
    uuid: string
    endpoint: string
    methods: string
    user_id: string
  }

  export type user_endpoint_accessUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutUser_endpoint_accessNestedInput
  }

  export type user_endpoint_accessUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_endpoint_accessCreateManyInput = {
    uuid: string
    endpoint: string
    methods: string
    user_id: string
  }

  export type user_endpoint_accessUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
  }

  export type user_endpoint_accessUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_submissionsCreateInput = {
    uuid?: string
    image_path: string
    ai_verdict?: string
    ai_confidence?: number | null
    ai_reasoning?: string | null
    submitted_at?: Date | string
    user_tasks: user_tasksCreateNestedOneWithoutChallenge_submissionsInput
  }

  export type challenge_submissionsUncheckedCreateInput = {
    uuid?: string
    user_task_id: string
    image_path: string
    ai_verdict?: string
    ai_confidence?: number | null
    ai_reasoning?: string | null
    submitted_at?: Date | string
  }

  export type challenge_submissionsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_tasks?: user_tasksUpdateOneRequiredWithoutChallenge_submissionsNestedInput
  }

  export type challenge_submissionsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_task_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsCreateManyInput = {
    uuid?: string
    user_task_id: string
    image_path: string
    ai_verdict?: string
    ai_confidence?: number | null
    ai_reasoning?: string | null
    submitted_at?: Date | string
  }

  export type challenge_submissionsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_task_id?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsCreateInput = {
    uuid?: string
    type: string
    title: string
    description: string
    priority: string
    status?: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutTicketsInput
  }

  export type ticketsUncheckedCreateInput = {
    uuid?: string
    user_id: string
    type: string
    title: string
    description: string
    priority: string
    status?: string
    created_at?: Date | string
  }

  export type ticketsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsCreateManyInput = {
    uuid?: string
    user_id: string
    type: string
    title: string
    description: string
    priority: string
    status?: string
    created_at?: Date | string
  }

  export type ticketsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type page_viewsCreateInput = {
    uuid?: string
    date: Date | string
    count?: number
  }

  export type page_viewsUncheckedCreateInput = {
    uuid?: string
    date: Date | string
    count?: number
  }

  export type page_viewsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type page_viewsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type page_viewsCreateManyInput = {
    uuid?: string
    date: Date | string
    count?: number
  }

  export type page_viewsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type page_viewsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesCountOrderByAggregateInput = {
    uuid?: SortOrder
    type?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    uuid?: SortOrder
    type?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    uuid?: SortOrder
    type?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type User_tasksListRelationFilter = {
    every?: user_tasksWhereInput
    some?: user_tasksWhereInput
    none?: user_tasksWhereInput
  }

  export type user_tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelevanceInput = {
    fields: tasksOrderByRelevanceFieldEnum | tasksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tasksCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    difficulty?: SortOrder
    categories_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    xp?: SortOrder
    coin?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    difficulty?: SortOrder
    categories_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    difficulty?: SortOrder
    categories_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    xp?: SortOrder
    coin?: SortOrder
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

  export type user_interestsOrderByRelevanceInput = {
    fields: user_interestsOrderByRelevanceFieldEnum | user_interestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_interestsUser_idCategory_idCompoundUniqueInput = {
    user_id: string
    category_id: string
  }

  export type user_interestsCountOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_interestsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_interestsMinOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type Challenge_submissionsListRelationFilter = {
    every?: challenge_submissionsWhereInput
    some?: challenge_submissionsWhereInput
    none?: challenge_submissionsWhereInput
  }

  export type TasksScalarRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type challenge_submissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_tasksOrderByRelevanceInput = {
    fields: user_tasksOrderByRelevanceFieldEnum | user_tasksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tasksCountOrderByAggregateInput = {
    uuid?: SortOrder
    status?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type user_tasksAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type user_tasksMaxOrderByAggregateInput = {
    uuid?: SortOrder
    status?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type user_tasksMinOrderByAggregateInput = {
    uuid?: SortOrder
    status?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type user_tasksSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type TicketsListRelationFilter = {
    every?: ticketsWhereInput
    some?: ticketsWhereInput
    none?: ticketsWhereInput
  }

  export type User_endpoint_accessListRelationFilter = {
    every?: user_endpoint_accessWhereInput
    some?: user_endpoint_accessWhereInput
    none?: user_endpoint_accessWhereInput
  }

  export type User_shop_itemsListRelationFilter = {
    every?: user_shop_itemsWhereInput
    some?: user_shop_itemsWhereInput
    none?: user_shop_itemsWhereInput
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_endpoint_accessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_shop_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    registered_at?: SortOrder
    onboarding_completed?: SortOrder
    activity_level?: SortOrder
    current_streak?: SortOrder
    last_completed_at?: SortOrder
    longest_streak?: SortOrder
    active_border_id?: SortOrder
    active_name_color_id?: SortOrder
    is_banned?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    registered_at?: SortOrder
    onboarding_completed?: SortOrder
    activity_level?: SortOrder
    current_streak?: SortOrder
    last_completed_at?: SortOrder
    longest_streak?: SortOrder
    active_border_id?: SortOrder
    active_name_color_id?: SortOrder
    is_banned?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    registered_at?: SortOrder
    onboarding_completed?: SortOrder
    activity_level?: SortOrder
    current_streak?: SortOrder
    last_completed_at?: SortOrder
    longest_streak?: SortOrder
    active_border_id?: SortOrder
    active_name_color_id?: SortOrder
    is_banned?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    xp?: SortOrder
    coin?: SortOrder
    admin?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type shop_itemsOrderByRelevanceInput = {
    fields: shop_itemsOrderByRelevanceFieldEnum | shop_itemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type shop_itemsCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    value?: SortOrder
  }

  export type shop_itemsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type shop_itemsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    value?: SortOrder
  }

  export type shop_itemsMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    value?: SortOrder
  }

  export type shop_itemsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type Shop_itemsScalarRelationFilter = {
    is?: shop_itemsWhereInput
    isNot?: shop_itemsWhereInput
  }

  export type user_shop_itemsOrderByRelevanceInput = {
    fields: user_shop_itemsOrderByRelevanceFieldEnum | user_shop_itemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_shop_itemsUser_idShop_item_idCompoundUniqueInput = {
    user_id: string
    shop_item_id: string
  }

  export type user_shop_itemsCountOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    shop_item_id?: SortOrder
    purchased_at?: SortOrder
  }

  export type user_shop_itemsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    shop_item_id?: SortOrder
    purchased_at?: SortOrder
  }

  export type user_shop_itemsMinOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    shop_item_id?: SortOrder
    purchased_at?: SortOrder
  }

  export type user_endpoint_accessOrderByRelevanceInput = {
    fields: user_endpoint_accessOrderByRelevanceFieldEnum | user_endpoint_accessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_endpoint_accessCountOrderByAggregateInput = {
    uuid?: SortOrder
    endpoint?: SortOrder
    methods?: SortOrder
    user_id?: SortOrder
  }

  export type user_endpoint_accessMaxOrderByAggregateInput = {
    uuid?: SortOrder
    endpoint?: SortOrder
    methods?: SortOrder
    user_id?: SortOrder
  }

  export type user_endpoint_accessMinOrderByAggregateInput = {
    uuid?: SortOrder
    endpoint?: SortOrder
    methods?: SortOrder
    user_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type User_tasksScalarRelationFilter = {
    is?: user_tasksWhereInput
    isNot?: user_tasksWhereInput
  }

  export type challenge_submissionsOrderByRelevanceInput = {
    fields: challenge_submissionsOrderByRelevanceFieldEnum | challenge_submissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type challenge_submissionsCountOrderByAggregateInput = {
    uuid?: SortOrder
    user_task_id?: SortOrder
    image_path?: SortOrder
    ai_verdict?: SortOrder
    ai_confidence?: SortOrder
    ai_reasoning?: SortOrder
    submitted_at?: SortOrder
  }

  export type challenge_submissionsAvgOrderByAggregateInput = {
    ai_confidence?: SortOrder
  }

  export type challenge_submissionsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    user_task_id?: SortOrder
    image_path?: SortOrder
    ai_verdict?: SortOrder
    ai_confidence?: SortOrder
    ai_reasoning?: SortOrder
    submitted_at?: SortOrder
  }

  export type challenge_submissionsMinOrderByAggregateInput = {
    uuid?: SortOrder
    user_task_id?: SortOrder
    image_path?: SortOrder
    ai_verdict?: SortOrder
    ai_confidence?: SortOrder
    ai_reasoning?: SortOrder
    submitted_at?: SortOrder
  }

  export type challenge_submissionsSumOrderByAggregateInput = {
    ai_confidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ticketsOrderByRelevanceInput = {
    fields: ticketsOrderByRelevanceFieldEnum | ticketsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ticketsCountOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    uuid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type page_viewsOrderByRelevanceInput = {
    fields: page_viewsOrderByRelevanceFieldEnum | page_viewsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type page_viewsCountOrderByAggregateInput = {
    uuid?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type page_viewsAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type page_viewsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type page_viewsMinOrderByAggregateInput = {
    uuid?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type page_viewsSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type usersCreateNestedOneWithoutCategories_categories_created_byTousersInput = {
    create?: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<tasksCreateWithoutCategoriesInput, tasksUncheckedCreateWithoutCategoriesInput> | tasksCreateWithoutCategoriesInput[] | tasksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutCategoriesInput | tasksCreateOrConnectWithoutCategoriesInput[]
    createMany?: tasksCreateManyCategoriesInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<tasksCreateWithoutCategoriesInput, tasksUncheckedCreateWithoutCategoriesInput> | tasksCreateWithoutCategoriesInput[] | tasksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutCategoriesInput | tasksCreateOrConnectWithoutCategoriesInput[]
    createMany?: tasksCreateManyCategoriesInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_created_byTousersInput
    upsert?: usersUpsertWithoutCategories_categories_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategories_categories_created_byTousersInput, usersUpdateWithoutCategories_categories_created_byTousersInput>, usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput>
  }

  export type usersUpdateOneWithoutCategories_categories_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_updated_byTousersInput
    upsert?: usersUpsertWithoutCategories_categories_updated_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategories_categories_updated_byTousersInput, usersUpdateWithoutCategories_categories_updated_byTousersInput>, usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput>
  }

  export type tasksUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<tasksCreateWithoutCategoriesInput, tasksUncheckedCreateWithoutCategoriesInput> | tasksCreateWithoutCategoriesInput[] | tasksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutCategoriesInput | tasksCreateOrConnectWithoutCategoriesInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutCategoriesInput | tasksUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: tasksCreateManyCategoriesInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutCategoriesInput | tasksUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutCategoriesInput | tasksUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tasksUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<tasksCreateWithoutCategoriesInput, tasksUncheckedCreateWithoutCategoriesInput> | tasksCreateWithoutCategoriesInput[] | tasksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutCategoriesInput | tasksCreateOrConnectWithoutCategoriesInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutCategoriesInput | tasksUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: tasksCreateManyCategoriesInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutCategoriesInput | tasksUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutCategoriesInput | tasksUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutTasksInput = {
    create?: XOR<categoriesCreateWithoutTasksInput, categoriesUncheckedCreateWithoutTasksInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutTasksInput
    connect?: categoriesWhereUniqueInput
  }

  export type user_tasksCreateNestedManyWithoutTasksInput = {
    create?: XOR<user_tasksCreateWithoutTasksInput, user_tasksUncheckedCreateWithoutTasksInput> | user_tasksCreateWithoutTasksInput[] | user_tasksUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutTasksInput | user_tasksCreateOrConnectWithoutTasksInput[]
    createMany?: user_tasksCreateManyTasksInputEnvelope
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
  }

  export type user_tasksUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<user_tasksCreateWithoutTasksInput, user_tasksUncheckedCreateWithoutTasksInput> | user_tasksCreateWithoutTasksInput[] | user_tasksUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutTasksInput | user_tasksCreateOrConnectWithoutTasksInput[]
    createMany?: user_tasksCreateManyTasksInputEnvelope
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutTasks_tasks_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_created_byTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_created_byTousersInput, usersUpdateWithoutTasks_tasks_created_byTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput>
  }

  export type usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_updated_byTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_updated_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_updated_byTousersInput, usersUpdateWithoutTasks_tasks_updated_byTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput>
  }

  export type categoriesUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<categoriesCreateWithoutTasksInput, categoriesUncheckedCreateWithoutTasksInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutTasksInput
    upsert?: categoriesUpsertWithoutTasksInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutTasksInput, categoriesUpdateWithoutTasksInput>, categoriesUncheckedUpdateWithoutTasksInput>
  }

  export type user_tasksUpdateManyWithoutTasksNestedInput = {
    create?: XOR<user_tasksCreateWithoutTasksInput, user_tasksUncheckedCreateWithoutTasksInput> | user_tasksCreateWithoutTasksInput[] | user_tasksUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutTasksInput | user_tasksCreateOrConnectWithoutTasksInput[]
    upsert?: user_tasksUpsertWithWhereUniqueWithoutTasksInput | user_tasksUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: user_tasksCreateManyTasksInputEnvelope
    set?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    disconnect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    delete?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    update?: user_tasksUpdateWithWhereUniqueWithoutTasksInput | user_tasksUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: user_tasksUpdateManyWithWhereWithoutTasksInput | user_tasksUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: user_tasksScalarWhereInput | user_tasksScalarWhereInput[]
  }

  export type user_tasksUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<user_tasksCreateWithoutTasksInput, user_tasksUncheckedCreateWithoutTasksInput> | user_tasksCreateWithoutTasksInput[] | user_tasksUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutTasksInput | user_tasksCreateOrConnectWithoutTasksInput[]
    upsert?: user_tasksUpsertWithWhereUniqueWithoutTasksInput | user_tasksUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: user_tasksCreateManyTasksInputEnvelope
    set?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    disconnect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    delete?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    update?: user_tasksUpdateWithWhereUniqueWithoutTasksInput | user_tasksUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: user_tasksUpdateManyWithWhereWithoutTasksInput | user_tasksUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: user_tasksScalarWhereInput | user_tasksScalarWhereInput[]
  }

  export type challenge_submissionsCreateNestedManyWithoutUser_tasksInput = {
    create?: XOR<challenge_submissionsCreateWithoutUser_tasksInput, challenge_submissionsUncheckedCreateWithoutUser_tasksInput> | challenge_submissionsCreateWithoutUser_tasksInput[] | challenge_submissionsUncheckedCreateWithoutUser_tasksInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutUser_tasksInput | challenge_submissionsCreateOrConnectWithoutUser_tasksInput[]
    createMany?: challenge_submissionsCreateManyUser_tasksInputEnvelope
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutUser_tasksInput = {
    create?: XOR<usersCreateWithoutUser_tasksInput, usersUncheckedCreateWithoutUser_tasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_tasksInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutUser_tasksInput = {
    create?: XOR<tasksCreateWithoutUser_tasksInput, tasksUncheckedCreateWithoutUser_tasksInput>
    connectOrCreate?: tasksCreateOrConnectWithoutUser_tasksInput
    connect?: tasksWhereUniqueInput
  }

  export type challenge_submissionsUncheckedCreateNestedManyWithoutUser_tasksInput = {
    create?: XOR<challenge_submissionsCreateWithoutUser_tasksInput, challenge_submissionsUncheckedCreateWithoutUser_tasksInput> | challenge_submissionsCreateWithoutUser_tasksInput[] | challenge_submissionsUncheckedCreateWithoutUser_tasksInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutUser_tasksInput | challenge_submissionsCreateOrConnectWithoutUser_tasksInput[]
    createMany?: challenge_submissionsCreateManyUser_tasksInputEnvelope
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
  }

  export type challenge_submissionsUpdateManyWithoutUser_tasksNestedInput = {
    create?: XOR<challenge_submissionsCreateWithoutUser_tasksInput, challenge_submissionsUncheckedCreateWithoutUser_tasksInput> | challenge_submissionsCreateWithoutUser_tasksInput[] | challenge_submissionsUncheckedCreateWithoutUser_tasksInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutUser_tasksInput | challenge_submissionsCreateOrConnectWithoutUser_tasksInput[]
    upsert?: challenge_submissionsUpsertWithWhereUniqueWithoutUser_tasksInput | challenge_submissionsUpsertWithWhereUniqueWithoutUser_tasksInput[]
    createMany?: challenge_submissionsCreateManyUser_tasksInputEnvelope
    set?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    disconnect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    delete?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    update?: challenge_submissionsUpdateWithWhereUniqueWithoutUser_tasksInput | challenge_submissionsUpdateWithWhereUniqueWithoutUser_tasksInput[]
    updateMany?: challenge_submissionsUpdateManyWithWhereWithoutUser_tasksInput | challenge_submissionsUpdateManyWithWhereWithoutUser_tasksInput[]
    deleteMany?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutUser_tasksNestedInput = {
    create?: XOR<usersCreateWithoutUser_tasksInput, usersUncheckedCreateWithoutUser_tasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_tasksInput
    upsert?: usersUpsertWithoutUser_tasksInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_tasksInput, usersUpdateWithoutUser_tasksInput>, usersUncheckedUpdateWithoutUser_tasksInput>
  }

  export type tasksUpdateOneRequiredWithoutUser_tasksNestedInput = {
    create?: XOR<tasksCreateWithoutUser_tasksInput, tasksUncheckedCreateWithoutUser_tasksInput>
    connectOrCreate?: tasksCreateOrConnectWithoutUser_tasksInput
    upsert?: tasksUpsertWithoutUser_tasksInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutUser_tasksInput, tasksUpdateWithoutUser_tasksInput>, tasksUncheckedUpdateWithoutUser_tasksInput>
  }

  export type challenge_submissionsUncheckedUpdateManyWithoutUser_tasksNestedInput = {
    create?: XOR<challenge_submissionsCreateWithoutUser_tasksInput, challenge_submissionsUncheckedCreateWithoutUser_tasksInput> | challenge_submissionsCreateWithoutUser_tasksInput[] | challenge_submissionsUncheckedCreateWithoutUser_tasksInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutUser_tasksInput | challenge_submissionsCreateOrConnectWithoutUser_tasksInput[]
    upsert?: challenge_submissionsUpsertWithWhereUniqueWithoutUser_tasksInput | challenge_submissionsUpsertWithWhereUniqueWithoutUser_tasksInput[]
    createMany?: challenge_submissionsCreateManyUser_tasksInputEnvelope
    set?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    disconnect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    delete?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    update?: challenge_submissionsUpdateWithWhereUniqueWithoutUser_tasksInput | challenge_submissionsUpdateWithWhereUniqueWithoutUser_tasksInput[]
    updateMany?: challenge_submissionsUpdateManyWithWhereWithoutUser_tasksInput | challenge_submissionsUpdateManyWithWhereWithoutUser_tasksInput[]
    deleteMany?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
  }

  export type categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type ticketsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ticketsCreateWithoutUsersInput, ticketsUncheckedCreateWithoutUsersInput> | ticketsCreateWithoutUsersInput[] | ticketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsersInput | ticketsCreateOrConnectWithoutUsersInput[]
    createMany?: ticketsCreateManyUsersInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type user_endpoint_accessCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_endpoint_accessCreateWithoutUsersInput, user_endpoint_accessUncheckedCreateWithoutUsersInput> | user_endpoint_accessCreateWithoutUsersInput[] | user_endpoint_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_endpoint_accessCreateOrConnectWithoutUsersInput | user_endpoint_accessCreateOrConnectWithoutUsersInput[]
    createMany?: user_endpoint_accessCreateManyUsersInputEnvelope
    connect?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
  }

  export type user_shop_itemsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_shop_itemsCreateWithoutUsersInput, user_shop_itemsUncheckedCreateWithoutUsersInput> | user_shop_itemsCreateWithoutUsersInput[] | user_shop_itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutUsersInput | user_shop_itemsCreateOrConnectWithoutUsersInput[]
    createMany?: user_shop_itemsCreateManyUsersInputEnvelope
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
  }

  export type user_tasksCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_tasksCreateWithoutUsersInput, user_tasksUncheckedCreateWithoutUsersInput> | user_tasksCreateWithoutUsersInput[] | user_tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutUsersInput | user_tasksCreateOrConnectWithoutUsersInput[]
    createMany?: user_tasksCreateManyUsersInputEnvelope
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ticketsCreateWithoutUsersInput, ticketsUncheckedCreateWithoutUsersInput> | ticketsCreateWithoutUsersInput[] | ticketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsersInput | ticketsCreateOrConnectWithoutUsersInput[]
    createMany?: ticketsCreateManyUsersInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_endpoint_accessCreateWithoutUsersInput, user_endpoint_accessUncheckedCreateWithoutUsersInput> | user_endpoint_accessCreateWithoutUsersInput[] | user_endpoint_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_endpoint_accessCreateOrConnectWithoutUsersInput | user_endpoint_accessCreateOrConnectWithoutUsersInput[]
    createMany?: user_endpoint_accessCreateManyUsersInputEnvelope
    connect?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
  }

  export type user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_shop_itemsCreateWithoutUsersInput, user_shop_itemsUncheckedCreateWithoutUsersInput> | user_shop_itemsCreateWithoutUsersInput[] | user_shop_itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutUsersInput | user_shop_itemsCreateOrConnectWithoutUsersInput[]
    createMany?: user_shop_itemsCreateManyUsersInputEnvelope
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
  }

  export type user_tasksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_tasksCreateWithoutUsersInput, user_tasksUncheckedCreateWithoutUsersInput> | user_tasksCreateWithoutUsersInput[] | user_tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutUsersInput | user_tasksCreateOrConnectWithoutUsersInput[]
    createMany?: user_tasksCreateManyUsersInputEnvelope
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type ticketsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ticketsCreateWithoutUsersInput, ticketsUncheckedCreateWithoutUsersInput> | ticketsCreateWithoutUsersInput[] | ticketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsersInput | ticketsCreateOrConnectWithoutUsersInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsersInput | ticketsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ticketsCreateManyUsersInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsersInput | ticketsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsersInput | ticketsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type user_endpoint_accessUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_endpoint_accessCreateWithoutUsersInput, user_endpoint_accessUncheckedCreateWithoutUsersInput> | user_endpoint_accessCreateWithoutUsersInput[] | user_endpoint_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_endpoint_accessCreateOrConnectWithoutUsersInput | user_endpoint_accessCreateOrConnectWithoutUsersInput[]
    upsert?: user_endpoint_accessUpsertWithWhereUniqueWithoutUsersInput | user_endpoint_accessUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_endpoint_accessCreateManyUsersInputEnvelope
    set?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    disconnect?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    delete?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    connect?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    update?: user_endpoint_accessUpdateWithWhereUniqueWithoutUsersInput | user_endpoint_accessUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_endpoint_accessUpdateManyWithWhereWithoutUsersInput | user_endpoint_accessUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_endpoint_accessScalarWhereInput | user_endpoint_accessScalarWhereInput[]
  }

  export type user_shop_itemsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_shop_itemsCreateWithoutUsersInput, user_shop_itemsUncheckedCreateWithoutUsersInput> | user_shop_itemsCreateWithoutUsersInput[] | user_shop_itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutUsersInput | user_shop_itemsCreateOrConnectWithoutUsersInput[]
    upsert?: user_shop_itemsUpsertWithWhereUniqueWithoutUsersInput | user_shop_itemsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_shop_itemsCreateManyUsersInputEnvelope
    set?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    disconnect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    delete?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    update?: user_shop_itemsUpdateWithWhereUniqueWithoutUsersInput | user_shop_itemsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_shop_itemsUpdateManyWithWhereWithoutUsersInput | user_shop_itemsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_shop_itemsScalarWhereInput | user_shop_itemsScalarWhereInput[]
  }

  export type user_tasksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_tasksCreateWithoutUsersInput, user_tasksUncheckedCreateWithoutUsersInput> | user_tasksCreateWithoutUsersInput[] | user_tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutUsersInput | user_tasksCreateOrConnectWithoutUsersInput[]
    upsert?: user_tasksUpsertWithWhereUniqueWithoutUsersInput | user_tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_tasksCreateManyUsersInputEnvelope
    set?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    disconnect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    delete?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    update?: user_tasksUpdateWithWhereUniqueWithoutUsersInput | user_tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_tasksUpdateManyWithWhereWithoutUsersInput | user_tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_tasksScalarWhereInput | user_tasksScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ticketsCreateWithoutUsersInput, ticketsUncheckedCreateWithoutUsersInput> | ticketsCreateWithoutUsersInput[] | ticketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsersInput | ticketsCreateOrConnectWithoutUsersInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsersInput | ticketsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ticketsCreateManyUsersInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsersInput | ticketsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsersInput | ticketsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_endpoint_accessCreateWithoutUsersInput, user_endpoint_accessUncheckedCreateWithoutUsersInput> | user_endpoint_accessCreateWithoutUsersInput[] | user_endpoint_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_endpoint_accessCreateOrConnectWithoutUsersInput | user_endpoint_accessCreateOrConnectWithoutUsersInput[]
    upsert?: user_endpoint_accessUpsertWithWhereUniqueWithoutUsersInput | user_endpoint_accessUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_endpoint_accessCreateManyUsersInputEnvelope
    set?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    disconnect?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    delete?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    connect?: user_endpoint_accessWhereUniqueInput | user_endpoint_accessWhereUniqueInput[]
    update?: user_endpoint_accessUpdateWithWhereUniqueWithoutUsersInput | user_endpoint_accessUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_endpoint_accessUpdateManyWithWhereWithoutUsersInput | user_endpoint_accessUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_endpoint_accessScalarWhereInput | user_endpoint_accessScalarWhereInput[]
  }

  export type user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_shop_itemsCreateWithoutUsersInput, user_shop_itemsUncheckedCreateWithoutUsersInput> | user_shop_itemsCreateWithoutUsersInput[] | user_shop_itemsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutUsersInput | user_shop_itemsCreateOrConnectWithoutUsersInput[]
    upsert?: user_shop_itemsUpsertWithWhereUniqueWithoutUsersInput | user_shop_itemsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_shop_itemsCreateManyUsersInputEnvelope
    set?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    disconnect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    delete?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    update?: user_shop_itemsUpdateWithWhereUniqueWithoutUsersInput | user_shop_itemsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_shop_itemsUpdateManyWithWhereWithoutUsersInput | user_shop_itemsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_shop_itemsScalarWhereInput | user_shop_itemsScalarWhereInput[]
  }

  export type user_tasksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_tasksCreateWithoutUsersInput, user_tasksUncheckedCreateWithoutUsersInput> | user_tasksCreateWithoutUsersInput[] | user_tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_tasksCreateOrConnectWithoutUsersInput | user_tasksCreateOrConnectWithoutUsersInput[]
    upsert?: user_tasksUpsertWithWhereUniqueWithoutUsersInput | user_tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_tasksCreateManyUsersInputEnvelope
    set?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    disconnect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    delete?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    connect?: user_tasksWhereUniqueInput | user_tasksWhereUniqueInput[]
    update?: user_tasksUpdateWithWhereUniqueWithoutUsersInput | user_tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_tasksUpdateManyWithWhereWithoutUsersInput | user_tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_tasksScalarWhereInput | user_tasksScalarWhereInput[]
  }

  export type user_shop_itemsCreateNestedManyWithoutShop_itemsInput = {
    create?: XOR<user_shop_itemsCreateWithoutShop_itemsInput, user_shop_itemsUncheckedCreateWithoutShop_itemsInput> | user_shop_itemsCreateWithoutShop_itemsInput[] | user_shop_itemsUncheckedCreateWithoutShop_itemsInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutShop_itemsInput | user_shop_itemsCreateOrConnectWithoutShop_itemsInput[]
    createMany?: user_shop_itemsCreateManyShop_itemsInputEnvelope
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
  }

  export type user_shop_itemsUncheckedCreateNestedManyWithoutShop_itemsInput = {
    create?: XOR<user_shop_itemsCreateWithoutShop_itemsInput, user_shop_itemsUncheckedCreateWithoutShop_itemsInput> | user_shop_itemsCreateWithoutShop_itemsInput[] | user_shop_itemsUncheckedCreateWithoutShop_itemsInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutShop_itemsInput | user_shop_itemsCreateOrConnectWithoutShop_itemsInput[]
    createMany?: user_shop_itemsCreateManyShop_itemsInputEnvelope
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
  }

  export type user_shop_itemsUpdateManyWithoutShop_itemsNestedInput = {
    create?: XOR<user_shop_itemsCreateWithoutShop_itemsInput, user_shop_itemsUncheckedCreateWithoutShop_itemsInput> | user_shop_itemsCreateWithoutShop_itemsInput[] | user_shop_itemsUncheckedCreateWithoutShop_itemsInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutShop_itemsInput | user_shop_itemsCreateOrConnectWithoutShop_itemsInput[]
    upsert?: user_shop_itemsUpsertWithWhereUniqueWithoutShop_itemsInput | user_shop_itemsUpsertWithWhereUniqueWithoutShop_itemsInput[]
    createMany?: user_shop_itemsCreateManyShop_itemsInputEnvelope
    set?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    disconnect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    delete?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    update?: user_shop_itemsUpdateWithWhereUniqueWithoutShop_itemsInput | user_shop_itemsUpdateWithWhereUniqueWithoutShop_itemsInput[]
    updateMany?: user_shop_itemsUpdateManyWithWhereWithoutShop_itemsInput | user_shop_itemsUpdateManyWithWhereWithoutShop_itemsInput[]
    deleteMany?: user_shop_itemsScalarWhereInput | user_shop_itemsScalarWhereInput[]
  }

  export type user_shop_itemsUncheckedUpdateManyWithoutShop_itemsNestedInput = {
    create?: XOR<user_shop_itemsCreateWithoutShop_itemsInput, user_shop_itemsUncheckedCreateWithoutShop_itemsInput> | user_shop_itemsCreateWithoutShop_itemsInput[] | user_shop_itemsUncheckedCreateWithoutShop_itemsInput[]
    connectOrCreate?: user_shop_itemsCreateOrConnectWithoutShop_itemsInput | user_shop_itemsCreateOrConnectWithoutShop_itemsInput[]
    upsert?: user_shop_itemsUpsertWithWhereUniqueWithoutShop_itemsInput | user_shop_itemsUpsertWithWhereUniqueWithoutShop_itemsInput[]
    createMany?: user_shop_itemsCreateManyShop_itemsInputEnvelope
    set?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    disconnect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    delete?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    connect?: user_shop_itemsWhereUniqueInput | user_shop_itemsWhereUniqueInput[]
    update?: user_shop_itemsUpdateWithWhereUniqueWithoutShop_itemsInput | user_shop_itemsUpdateWithWhereUniqueWithoutShop_itemsInput[]
    updateMany?: user_shop_itemsUpdateManyWithWhereWithoutShop_itemsInput | user_shop_itemsUpdateManyWithWhereWithoutShop_itemsInput[]
    deleteMany?: user_shop_itemsScalarWhereInput | user_shop_itemsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_shop_itemsInput = {
    create?: XOR<usersCreateWithoutUser_shop_itemsInput, usersUncheckedCreateWithoutUser_shop_itemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_shop_itemsInput
    connect?: usersWhereUniqueInput
  }

  export type shop_itemsCreateNestedOneWithoutUser_shop_itemsInput = {
    create?: XOR<shop_itemsCreateWithoutUser_shop_itemsInput, shop_itemsUncheckedCreateWithoutUser_shop_itemsInput>
    connectOrCreate?: shop_itemsCreateOrConnectWithoutUser_shop_itemsInput
    connect?: shop_itemsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_shop_itemsNestedInput = {
    create?: XOR<usersCreateWithoutUser_shop_itemsInput, usersUncheckedCreateWithoutUser_shop_itemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_shop_itemsInput
    upsert?: usersUpsertWithoutUser_shop_itemsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_shop_itemsInput, usersUpdateWithoutUser_shop_itemsInput>, usersUncheckedUpdateWithoutUser_shop_itemsInput>
  }

  export type shop_itemsUpdateOneRequiredWithoutUser_shop_itemsNestedInput = {
    create?: XOR<shop_itemsCreateWithoutUser_shop_itemsInput, shop_itemsUncheckedCreateWithoutUser_shop_itemsInput>
    connectOrCreate?: shop_itemsCreateOrConnectWithoutUser_shop_itemsInput
    upsert?: shop_itemsUpsertWithoutUser_shop_itemsInput
    connect?: shop_itemsWhereUniqueInput
    update?: XOR<XOR<shop_itemsUpdateToOneWithWhereWithoutUser_shop_itemsInput, shop_itemsUpdateWithoutUser_shop_itemsInput>, shop_itemsUncheckedUpdateWithoutUser_shop_itemsInput>
  }

  export type usersCreateNestedOneWithoutUser_endpoint_accessInput = {
    create?: XOR<usersCreateWithoutUser_endpoint_accessInput, usersUncheckedCreateWithoutUser_endpoint_accessInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_endpoint_accessInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_endpoint_accessNestedInput = {
    create?: XOR<usersCreateWithoutUser_endpoint_accessInput, usersUncheckedCreateWithoutUser_endpoint_accessInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_endpoint_accessInput
    upsert?: usersUpsertWithoutUser_endpoint_accessInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_endpoint_accessInput, usersUpdateWithoutUser_endpoint_accessInput>, usersUncheckedUpdateWithoutUser_endpoint_accessInput>
  }

  export type user_tasksCreateNestedOneWithoutChallenge_submissionsInput = {
    create?: XOR<user_tasksCreateWithoutChallenge_submissionsInput, user_tasksUncheckedCreateWithoutChallenge_submissionsInput>
    connectOrCreate?: user_tasksCreateOrConnectWithoutChallenge_submissionsInput
    connect?: user_tasksWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_tasksUpdateOneRequiredWithoutChallenge_submissionsNestedInput = {
    create?: XOR<user_tasksCreateWithoutChallenge_submissionsInput, user_tasksUncheckedCreateWithoutChallenge_submissionsInput>
    connectOrCreate?: user_tasksCreateOrConnectWithoutChallenge_submissionsInput
    upsert?: user_tasksUpsertWithoutChallenge_submissionsInput
    connect?: user_tasksWhereUniqueInput
    update?: XOR<XOR<user_tasksUpdateToOneWithWhereWithoutChallenge_submissionsInput, user_tasksUpdateWithoutChallenge_submissionsInput>, user_tasksUncheckedUpdateWithoutChallenge_submissionsInput>
  }

  export type usersCreateNestedOneWithoutTicketsInput = {
    create?: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTicketsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTicketsInput
    upsert?: usersUpsertWithoutTicketsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTicketsInput, usersUpdateWithoutTicketsInput>, usersUncheckedUpdateWithoutTicketsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutCategories_categories_created_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCategories_categories_created_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCategories_categories_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
  }

  export type usersCreateWithoutCategories_categories_updated_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCategories_categories_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
  }

  export type tasksCreateWithoutCategoriesInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_tasks_created_byTousers: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
    user_tasks?: user_tasksCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutCategoriesInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutCategoriesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutCategoriesInput, tasksUncheckedCreateWithoutCategoriesInput>
  }

  export type tasksCreateManyCategoriesInputEnvelope = {
    data: tasksCreateManyCategoriesInput | tasksCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCategories_categories_created_byTousersInput = {
    update: XOR<usersUpdateWithoutCategories_categories_created_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput>
    create: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategories_categories_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategories_categories_created_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput>
  }

  export type usersUpdateWithoutCategories_categories_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutCategories_categories_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutCategories_categories_updated_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput>
    create: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategories_categories_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategories_categories_updated_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput>
  }

  export type usersUpdateWithoutCategories_categories_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasksUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutCategoriesInput, tasksUncheckedUpdateWithoutCategoriesInput>
    create: XOR<tasksCreateWithoutCategoriesInput, tasksUncheckedCreateWithoutCategoriesInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutCategoriesInput, tasksUncheckedUpdateWithoutCategoriesInput>
  }

  export type tasksUpdateManyWithWhereWithoutCategoriesInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    uuid?: StringFilter<"tasks"> | string
    name?: StringFilter<"tasks"> | string
    description?: StringFilter<"tasks"> | string
    xp?: IntFilter<"tasks"> | number
    coin?: IntFilter<"tasks"> | number
    difficulty?: StringFilter<"tasks"> | string
    categories_id?: StringFilter<"tasks"> | string
    created_at?: DateTimeFilter<"tasks"> | Date | string
    created_by?: StringFilter<"tasks"> | string
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_by?: StringNullableFilter<"tasks"> | string | null
  }

  export type usersCreateWithoutTasks_tasks_created_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
  }

  export type usersCreateWithoutTasks_tasks_updated_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
  }

  export type categoriesCreateWithoutTasksInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    users_categories_updated_byTousers?: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
  }

  export type categoriesUncheckedCreateWithoutTasksInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type categoriesCreateOrConnectWithoutTasksInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutTasksInput, categoriesUncheckedCreateWithoutTasksInput>
  }

  export type user_tasksCreateWithoutTasksInput = {
    uuid?: string
    status?: number
    created_at?: Date | string
    completed_at?: Date | string | null
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutUser_tasksInput
    users: usersCreateNestedOneWithoutUser_tasksInput
  }

  export type user_tasksUncheckedCreateWithoutTasksInput = {
    uuid?: string
    status?: number
    user_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutUser_tasksInput
  }

  export type user_tasksCreateOrConnectWithoutTasksInput = {
    where: user_tasksWhereUniqueInput
    create: XOR<user_tasksCreateWithoutTasksInput, user_tasksUncheckedCreateWithoutTasksInput>
  }

  export type user_tasksCreateManyTasksInputEnvelope = {
    data: user_tasksCreateManyTasksInput | user_tasksCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTasks_tasks_created_byTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_created_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_created_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutTasks_tasks_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type categoriesUpsertWithoutTasksInput = {
    update: XOR<categoriesUpdateWithoutTasksInput, categoriesUncheckedUpdateWithoutTasksInput>
    create: XOR<categoriesCreateWithoutTasksInput, categoriesUncheckedCreateWithoutTasksInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutTasksInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutTasksInput, categoriesUncheckedUpdateWithoutTasksInput>
  }

  export type categoriesUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    users_categories_updated_byTousers?: usersUpdateOneWithoutCategories_categories_updated_byTousersNestedInput
  }

  export type categoriesUncheckedUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_tasksUpsertWithWhereUniqueWithoutTasksInput = {
    where: user_tasksWhereUniqueInput
    update: XOR<user_tasksUpdateWithoutTasksInput, user_tasksUncheckedUpdateWithoutTasksInput>
    create: XOR<user_tasksCreateWithoutTasksInput, user_tasksUncheckedCreateWithoutTasksInput>
  }

  export type user_tasksUpdateWithWhereUniqueWithoutTasksInput = {
    where: user_tasksWhereUniqueInput
    data: XOR<user_tasksUpdateWithoutTasksInput, user_tasksUncheckedUpdateWithoutTasksInput>
  }

  export type user_tasksUpdateManyWithWhereWithoutTasksInput = {
    where: user_tasksScalarWhereInput
    data: XOR<user_tasksUpdateManyMutationInput, user_tasksUncheckedUpdateManyWithoutTasksInput>
  }

  export type user_tasksScalarWhereInput = {
    AND?: user_tasksScalarWhereInput | user_tasksScalarWhereInput[]
    OR?: user_tasksScalarWhereInput[]
    NOT?: user_tasksScalarWhereInput | user_tasksScalarWhereInput[]
    uuid?: StringFilter<"user_tasks"> | string
    status?: IntFilter<"user_tasks"> | number
    task_id?: StringFilter<"user_tasks"> | string
    user_id?: StringFilter<"user_tasks"> | string
    created_at?: DateTimeFilter<"user_tasks"> | Date | string
    completed_at?: DateTimeNullableFilter<"user_tasks"> | Date | string | null
  }

  export type challenge_submissionsCreateWithoutUser_tasksInput = {
    uuid?: string
    image_path: string
    ai_verdict?: string
    ai_confidence?: number | null
    ai_reasoning?: string | null
    submitted_at?: Date | string
  }

  export type challenge_submissionsUncheckedCreateWithoutUser_tasksInput = {
    uuid?: string
    image_path: string
    ai_verdict?: string
    ai_confidence?: number | null
    ai_reasoning?: string | null
    submitted_at?: Date | string
  }

  export type challenge_submissionsCreateOrConnectWithoutUser_tasksInput = {
    where: challenge_submissionsWhereUniqueInput
    create: XOR<challenge_submissionsCreateWithoutUser_tasksInput, challenge_submissionsUncheckedCreateWithoutUser_tasksInput>
  }

  export type challenge_submissionsCreateManyUser_tasksInputEnvelope = {
    data: challenge_submissionsCreateManyUser_tasksInput | challenge_submissionsCreateManyUser_tasksInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutUser_tasksInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_tasksInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_tasksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_tasksInput, usersUncheckedCreateWithoutUser_tasksInput>
  }

  export type tasksCreateWithoutUser_tasksInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_tasks_created_byTousers: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
    categories: categoriesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUser_tasksInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type tasksCreateOrConnectWithoutUser_tasksInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUser_tasksInput, tasksUncheckedCreateWithoutUser_tasksInput>
  }

  export type challenge_submissionsUpsertWithWhereUniqueWithoutUser_tasksInput = {
    where: challenge_submissionsWhereUniqueInput
    update: XOR<challenge_submissionsUpdateWithoutUser_tasksInput, challenge_submissionsUncheckedUpdateWithoutUser_tasksInput>
    create: XOR<challenge_submissionsCreateWithoutUser_tasksInput, challenge_submissionsUncheckedCreateWithoutUser_tasksInput>
  }

  export type challenge_submissionsUpdateWithWhereUniqueWithoutUser_tasksInput = {
    where: challenge_submissionsWhereUniqueInput
    data: XOR<challenge_submissionsUpdateWithoutUser_tasksInput, challenge_submissionsUncheckedUpdateWithoutUser_tasksInput>
  }

  export type challenge_submissionsUpdateManyWithWhereWithoutUser_tasksInput = {
    where: challenge_submissionsScalarWhereInput
    data: XOR<challenge_submissionsUpdateManyMutationInput, challenge_submissionsUncheckedUpdateManyWithoutUser_tasksInput>
  }

  export type challenge_submissionsScalarWhereInput = {
    AND?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
    OR?: challenge_submissionsScalarWhereInput[]
    NOT?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
    uuid?: StringFilter<"challenge_submissions"> | string
    user_task_id?: StringFilter<"challenge_submissions"> | string
    image_path?: StringFilter<"challenge_submissions"> | string
    ai_verdict?: StringFilter<"challenge_submissions"> | string
    ai_confidence?: FloatNullableFilter<"challenge_submissions"> | number | null
    ai_reasoning?: StringNullableFilter<"challenge_submissions"> | string | null
    submitted_at?: DateTimeFilter<"challenge_submissions"> | Date | string
  }

  export type usersUpsertWithoutUser_tasksInput = {
    update: XOR<usersUpdateWithoutUser_tasksInput, usersUncheckedUpdateWithoutUser_tasksInput>
    create: XOR<usersCreateWithoutUser_tasksInput, usersUncheckedCreateWithoutUser_tasksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_tasksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_tasksInput, usersUncheckedUpdateWithoutUser_tasksInput>
  }

  export type usersUpdateWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasksUpsertWithoutUser_tasksInput = {
    update: XOR<tasksUpdateWithoutUser_tasksInput, tasksUncheckedUpdateWithoutUser_tasksInput>
    create: XOR<tasksCreateWithoutUser_tasksInput, tasksUncheckedCreateWithoutUser_tasksInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutUser_tasksInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutUser_tasksInput, tasksUncheckedUpdateWithoutUser_tasksInput>
  }

  export type tasksUpdateWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_tasks_created_byTousers?: usersUpdateOneRequiredWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesCreateWithoutUsers_categories_created_byTousersInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_categories_updated_byTousers?: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    tasks?: tasksCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by?: string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesCreateManyUsers_categories_created_byTousersInputEnvelope = {
    data: categoriesCreateManyUsers_categories_created_byTousersInput | categoriesCreateManyUsers_categories_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutUsers_categories_updated_byTousersInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    tasks?: tasksCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope = {
    data: categoriesCreateManyUsers_categories_updated_byTousersInput | categoriesCreateManyUsers_categories_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_created_byTousersInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
    categories: categoriesCreateNestedOneWithoutTasksInput
    user_tasks?: user_tasksCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by?: string | null
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksCreateManyUsers_tasks_created_byTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_created_byTousersInput | tasksCreateManyUsers_tasks_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_updated_byTousersInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    users_tasks_created_byTousers: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    categories: categoriesCreateNestedOneWithoutTasksInput
    user_tasks?: user_tasksCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_updated_byTousersInput | tasksCreateManyUsers_tasks_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type ticketsCreateWithoutUsersInput = {
    uuid?: string
    type: string
    title: string
    description: string
    priority: string
    status?: string
    created_at?: Date | string
  }

  export type ticketsUncheckedCreateWithoutUsersInput = {
    uuid?: string
    type: string
    title: string
    description: string
    priority: string
    status?: string
    created_at?: Date | string
  }

  export type ticketsCreateOrConnectWithoutUsersInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutUsersInput, ticketsUncheckedCreateWithoutUsersInput>
  }

  export type ticketsCreateManyUsersInputEnvelope = {
    data: ticketsCreateManyUsersInput | ticketsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_endpoint_accessCreateWithoutUsersInput = {
    uuid: string
    endpoint: string
    methods: string
  }

  export type user_endpoint_accessUncheckedCreateWithoutUsersInput = {
    uuid: string
    endpoint: string
    methods: string
  }

  export type user_endpoint_accessCreateOrConnectWithoutUsersInput = {
    where: user_endpoint_accessWhereUniqueInput
    create: XOR<user_endpoint_accessCreateWithoutUsersInput, user_endpoint_accessUncheckedCreateWithoutUsersInput>
  }

  export type user_endpoint_accessCreateManyUsersInputEnvelope = {
    data: user_endpoint_accessCreateManyUsersInput | user_endpoint_accessCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_shop_itemsCreateWithoutUsersInput = {
    uuid?: string
    purchased_at?: Date | string
    shop_items: shop_itemsCreateNestedOneWithoutUser_shop_itemsInput
  }

  export type user_shop_itemsUncheckedCreateWithoutUsersInput = {
    uuid?: string
    shop_item_id: string
    purchased_at?: Date | string
  }

  export type user_shop_itemsCreateOrConnectWithoutUsersInput = {
    where: user_shop_itemsWhereUniqueInput
    create: XOR<user_shop_itemsCreateWithoutUsersInput, user_shop_itemsUncheckedCreateWithoutUsersInput>
  }

  export type user_shop_itemsCreateManyUsersInputEnvelope = {
    data: user_shop_itemsCreateManyUsersInput | user_shop_itemsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_tasksCreateWithoutUsersInput = {
    uuid?: string
    status?: number
    created_at?: Date | string
    completed_at?: Date | string | null
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutUser_tasksInput
    tasks: tasksCreateNestedOneWithoutUser_tasksInput
  }

  export type user_tasksUncheckedCreateWithoutUsersInput = {
    uuid?: string
    status?: number
    task_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutUser_tasksInput
  }

  export type user_tasksCreateOrConnectWithoutUsersInput = {
    where: user_tasksWhereUniqueInput
    create: XOR<user_tasksCreateWithoutUsersInput, user_tasksUncheckedCreateWithoutUsersInput>
  }

  export type user_tasksCreateManyUsersInputEnvelope = {
    data: user_tasksCreateManyUsersInput | user_tasksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_created_byTousersInput>
    create: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    uuid?: StringFilter<"categories"> | string
    type?: StringFilter<"categories"> | string
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    created_by?: StringFilter<"categories"> | string
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_by?: StringNullableFilter<"categories"> | string | null
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_updated_byTousersInput>
    create: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_created_byTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_updated_byTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersInput>
  }

  export type ticketsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutUsersInput, ticketsUncheckedUpdateWithoutUsersInput>
    create: XOR<ticketsCreateWithoutUsersInput, ticketsUncheckedCreateWithoutUsersInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutUsersInput, ticketsUncheckedUpdateWithoutUsersInput>
  }

  export type ticketsUpdateManyWithWhereWithoutUsersInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ticketsScalarWhereInput = {
    AND?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    OR?: ticketsScalarWhereInput[]
    NOT?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    uuid?: StringFilter<"tickets"> | string
    user_id?: StringFilter<"tickets"> | string
    type?: StringFilter<"tickets"> | string
    title?: StringFilter<"tickets"> | string
    description?: StringFilter<"tickets"> | string
    priority?: StringFilter<"tickets"> | string
    status?: StringFilter<"tickets"> | string
    created_at?: DateTimeFilter<"tickets"> | Date | string
  }

  export type user_endpoint_accessUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_endpoint_accessWhereUniqueInput
    update: XOR<user_endpoint_accessUpdateWithoutUsersInput, user_endpoint_accessUncheckedUpdateWithoutUsersInput>
    create: XOR<user_endpoint_accessCreateWithoutUsersInput, user_endpoint_accessUncheckedCreateWithoutUsersInput>
  }

  export type user_endpoint_accessUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_endpoint_accessWhereUniqueInput
    data: XOR<user_endpoint_accessUpdateWithoutUsersInput, user_endpoint_accessUncheckedUpdateWithoutUsersInput>
  }

  export type user_endpoint_accessUpdateManyWithWhereWithoutUsersInput = {
    where: user_endpoint_accessScalarWhereInput
    data: XOR<user_endpoint_accessUpdateManyMutationInput, user_endpoint_accessUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_endpoint_accessScalarWhereInput = {
    AND?: user_endpoint_accessScalarWhereInput | user_endpoint_accessScalarWhereInput[]
    OR?: user_endpoint_accessScalarWhereInput[]
    NOT?: user_endpoint_accessScalarWhereInput | user_endpoint_accessScalarWhereInput[]
    uuid?: StringFilter<"user_endpoint_access"> | string
    endpoint?: StringFilter<"user_endpoint_access"> | string
    methods?: StringFilter<"user_endpoint_access"> | string
    user_id?: StringFilter<"user_endpoint_access"> | string
  }

  export type user_shop_itemsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_shop_itemsWhereUniqueInput
    update: XOR<user_shop_itemsUpdateWithoutUsersInput, user_shop_itemsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_shop_itemsCreateWithoutUsersInput, user_shop_itemsUncheckedCreateWithoutUsersInput>
  }

  export type user_shop_itemsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_shop_itemsWhereUniqueInput
    data: XOR<user_shop_itemsUpdateWithoutUsersInput, user_shop_itemsUncheckedUpdateWithoutUsersInput>
  }

  export type user_shop_itemsUpdateManyWithWhereWithoutUsersInput = {
    where: user_shop_itemsScalarWhereInput
    data: XOR<user_shop_itemsUpdateManyMutationInput, user_shop_itemsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_shop_itemsScalarWhereInput = {
    AND?: user_shop_itemsScalarWhereInput | user_shop_itemsScalarWhereInput[]
    OR?: user_shop_itemsScalarWhereInput[]
    NOT?: user_shop_itemsScalarWhereInput | user_shop_itemsScalarWhereInput[]
    uuid?: StringFilter<"user_shop_items"> | string
    user_id?: StringFilter<"user_shop_items"> | string
    shop_item_id?: StringFilter<"user_shop_items"> | string
    purchased_at?: DateTimeFilter<"user_shop_items"> | Date | string
  }

  export type user_tasksUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_tasksWhereUniqueInput
    update: XOR<user_tasksUpdateWithoutUsersInput, user_tasksUncheckedUpdateWithoutUsersInput>
    create: XOR<user_tasksCreateWithoutUsersInput, user_tasksUncheckedCreateWithoutUsersInput>
  }

  export type user_tasksUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_tasksWhereUniqueInput
    data: XOR<user_tasksUpdateWithoutUsersInput, user_tasksUncheckedUpdateWithoutUsersInput>
  }

  export type user_tasksUpdateManyWithWhereWithoutUsersInput = {
    where: user_tasksScalarWhereInput
    data: XOR<user_tasksUpdateManyMutationInput, user_tasksUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_shop_itemsCreateWithoutShop_itemsInput = {
    uuid?: string
    purchased_at?: Date | string
    users: usersCreateNestedOneWithoutUser_shop_itemsInput
  }

  export type user_shop_itemsUncheckedCreateWithoutShop_itemsInput = {
    uuid?: string
    user_id: string
    purchased_at?: Date | string
  }

  export type user_shop_itemsCreateOrConnectWithoutShop_itemsInput = {
    where: user_shop_itemsWhereUniqueInput
    create: XOR<user_shop_itemsCreateWithoutShop_itemsInput, user_shop_itemsUncheckedCreateWithoutShop_itemsInput>
  }

  export type user_shop_itemsCreateManyShop_itemsInputEnvelope = {
    data: user_shop_itemsCreateManyShop_itemsInput | user_shop_itemsCreateManyShop_itemsInput[]
    skipDuplicates?: boolean
  }

  export type user_shop_itemsUpsertWithWhereUniqueWithoutShop_itemsInput = {
    where: user_shop_itemsWhereUniqueInput
    update: XOR<user_shop_itemsUpdateWithoutShop_itemsInput, user_shop_itemsUncheckedUpdateWithoutShop_itemsInput>
    create: XOR<user_shop_itemsCreateWithoutShop_itemsInput, user_shop_itemsUncheckedCreateWithoutShop_itemsInput>
  }

  export type user_shop_itemsUpdateWithWhereUniqueWithoutShop_itemsInput = {
    where: user_shop_itemsWhereUniqueInput
    data: XOR<user_shop_itemsUpdateWithoutShop_itemsInput, user_shop_itemsUncheckedUpdateWithoutShop_itemsInput>
  }

  export type user_shop_itemsUpdateManyWithWhereWithoutShop_itemsInput = {
    where: user_shop_itemsScalarWhereInput
    data: XOR<user_shop_itemsUpdateManyMutationInput, user_shop_itemsUncheckedUpdateManyWithoutShop_itemsInput>
  }

  export type usersCreateWithoutUser_shop_itemsInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_shop_itemsInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_shop_itemsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_shop_itemsInput, usersUncheckedCreateWithoutUser_shop_itemsInput>
  }

  export type shop_itemsCreateWithoutUser_shop_itemsInput = {
    uuid?: string
    name: string
    description: string
    price: number
    category: string
    created_at?: Date | string
    value?: string | null
  }

  export type shop_itemsUncheckedCreateWithoutUser_shop_itemsInput = {
    uuid?: string
    name: string
    description: string
    price: number
    category: string
    created_at?: Date | string
    value?: string | null
  }

  export type shop_itemsCreateOrConnectWithoutUser_shop_itemsInput = {
    where: shop_itemsWhereUniqueInput
    create: XOR<shop_itemsCreateWithoutUser_shop_itemsInput, shop_itemsUncheckedCreateWithoutUser_shop_itemsInput>
  }

  export type usersUpsertWithoutUser_shop_itemsInput = {
    update: XOR<usersUpdateWithoutUser_shop_itemsInput, usersUncheckedUpdateWithoutUser_shop_itemsInput>
    create: XOR<usersCreateWithoutUser_shop_itemsInput, usersUncheckedCreateWithoutUser_shop_itemsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_shop_itemsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_shop_itemsInput, usersUncheckedUpdateWithoutUser_shop_itemsInput>
  }

  export type usersUpdateWithoutUser_shop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_shop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type shop_itemsUpsertWithoutUser_shop_itemsInput = {
    update: XOR<shop_itemsUpdateWithoutUser_shop_itemsInput, shop_itemsUncheckedUpdateWithoutUser_shop_itemsInput>
    create: XOR<shop_itemsCreateWithoutUser_shop_itemsInput, shop_itemsUncheckedCreateWithoutUser_shop_itemsInput>
    where?: shop_itemsWhereInput
  }

  export type shop_itemsUpdateToOneWithWhereWithoutUser_shop_itemsInput = {
    where?: shop_itemsWhereInput
    data: XOR<shop_itemsUpdateWithoutUser_shop_itemsInput, shop_itemsUncheckedUpdateWithoutUser_shop_itemsInput>
  }

  export type shop_itemsUpdateWithoutUser_shop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shop_itemsUncheckedUpdateWithoutUser_shop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutUser_endpoint_accessInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_endpoint_accessInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_endpoint_accessInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_endpoint_accessInput, usersUncheckedCreateWithoutUser_endpoint_accessInput>
  }

  export type usersUpsertWithoutUser_endpoint_accessInput = {
    update: XOR<usersUpdateWithoutUser_endpoint_accessInput, usersUncheckedUpdateWithoutUser_endpoint_accessInput>
    create: XOR<usersCreateWithoutUser_endpoint_accessInput, usersUncheckedCreateWithoutUser_endpoint_accessInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_endpoint_accessInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_endpoint_accessInput, usersUncheckedUpdateWithoutUser_endpoint_accessInput>
  }

  export type usersUpdateWithoutUser_endpoint_accessInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_endpoint_accessInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_tasksCreateWithoutChallenge_submissionsInput = {
    uuid?: string
    status?: number
    created_at?: Date | string
    completed_at?: Date | string | null
    users: usersCreateNestedOneWithoutUser_tasksInput
    tasks: tasksCreateNestedOneWithoutUser_tasksInput
  }

  export type user_tasksUncheckedCreateWithoutChallenge_submissionsInput = {
    uuid?: string
    status?: number
    task_id: string
    user_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type user_tasksCreateOrConnectWithoutChallenge_submissionsInput = {
    where: user_tasksWhereUniqueInput
    create: XOR<user_tasksCreateWithoutChallenge_submissionsInput, user_tasksUncheckedCreateWithoutChallenge_submissionsInput>
  }

  export type user_tasksUpsertWithoutChallenge_submissionsInput = {
    update: XOR<user_tasksUpdateWithoutChallenge_submissionsInput, user_tasksUncheckedUpdateWithoutChallenge_submissionsInput>
    create: XOR<user_tasksCreateWithoutChallenge_submissionsInput, user_tasksUncheckedCreateWithoutChallenge_submissionsInput>
    where?: user_tasksWhereInput
  }

  export type user_tasksUpdateToOneWithWhereWithoutChallenge_submissionsInput = {
    where?: user_tasksWhereInput
    data: XOR<user_tasksUpdateWithoutChallenge_submissionsInput, user_tasksUncheckedUpdateWithoutChallenge_submissionsInput>
  }

  export type user_tasksUpdateWithoutChallenge_submissionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutUser_tasksNestedInput
    tasks?: tasksUpdateOneRequiredWithoutUser_tasksNestedInput
  }

  export type user_tasksUncheckedUpdateWithoutChallenge_submissionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutTicketsInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    user_endpoint_access?: user_endpoint_accessCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTicketsInput = {
    uuid?: string
    username: string
    email: string
    password: string
    xp: number
    coin: number
    admin: number
    registered_at?: Date | string
    onboarding_completed?: boolean
    activity_level?: string | null
    current_streak?: number
    last_completed_at?: Date | string | null
    longest_streak?: number
    active_border_id?: string | null
    active_name_color_id?: string | null
    is_banned?: boolean
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
    user_endpoint_access?: user_endpoint_accessUncheckedCreateNestedManyWithoutUsersInput
    user_shop_items?: user_shop_itemsUncheckedCreateNestedManyWithoutUsersInput
    user_tasks?: user_tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTicketsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
  }

  export type usersUpsertWithoutTicketsInput = {
    update: XOR<usersUpdateWithoutTicketsInput, usersUncheckedUpdateWithoutTicketsInput>
    create: XOR<usersCreateWithoutTicketsInput, usersUncheckedCreateWithoutTicketsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTicketsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTicketsInput, usersUncheckedUpdateWithoutTicketsInput>
  }

  export type usersUpdateWithoutTicketsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    user_endpoint_access?: user_endpoint_accessUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTicketsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    admin?: IntFieldUpdateOperationsInput | number
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding_completed?: BoolFieldUpdateOperationsInput | boolean
    activity_level?: NullableStringFieldUpdateOperationsInput | string | null
    current_streak?: IntFieldUpdateOperationsInput | number
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    longest_streak?: IntFieldUpdateOperationsInput | number
    active_border_id?: NullableStringFieldUpdateOperationsInput | string | null
    active_name_color_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
    user_endpoint_access?: user_endpoint_accessUncheckedUpdateManyWithoutUsersNestedInput
    user_shop_items?: user_shop_itemsUncheckedUpdateManyWithoutUsersNestedInput
    user_tasks?: user_tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasksCreateManyCategoriesInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type tasksUpdateWithoutCategoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_tasks_created_byTousers?: usersUpdateOneRequiredWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
    user_tasks?: user_tasksUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutCategoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    user_tasks?: user_tasksUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutCategoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_tasksCreateManyTasksInput = {
    uuid?: string
    status?: number
    user_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type user_tasksUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge_submissions?: challenge_submissionsUpdateManyWithoutUser_tasksNestedInput
    users?: usersUpdateOneRequiredWithoutUser_tasksNestedInput
  }

  export type user_tasksUncheckedUpdateWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutUser_tasksNestedInput
  }

  export type user_tasksUncheckedUpdateManyWithoutTasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type challenge_submissionsCreateManyUser_tasksInput = {
    uuid?: string
    image_path: string
    ai_verdict?: string
    ai_confidence?: number | null
    ai_reasoning?: string | null
    submitted_at?: Date | string
  }

  export type challenge_submissionsUpdateWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsUncheckedUpdateWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsUncheckedUpdateManyWithoutUser_tasksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    image_path?: StringFieldUpdateOperationsInput | string
    ai_verdict?: StringFieldUpdateOperationsInput | string
    ai_confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    ai_reasoning?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateManyUsers_categories_created_byTousersInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type categoriesCreateManyUsers_categories_updated_byTousersInput = {
    uuid: string
    type: string
    name: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
  }

  export type tasksCreateManyUsers_tasks_created_byTousersInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by?: string | null
  }

  export type tasksCreateManyUsers_tasks_updated_byTousersInput = {
    uuid?: string
    name: string
    description: string
    xp: number
    coin: number
    difficulty?: string
    categories_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
  }

  export type ticketsCreateManyUsersInput = {
    uuid?: string
    type: string
    title: string
    description: string
    priority: string
    status?: string
    created_at?: Date | string
  }

  export type user_endpoint_accessCreateManyUsersInput = {
    uuid: string
    endpoint: string
    methods: string
  }

  export type user_shop_itemsCreateManyUsersInput = {
    uuid?: string
    shop_item_id: string
    purchased_at?: Date | string
  }

  export type user_tasksCreateManyUsersInput = {
    uuid?: string
    status?: number
    task_id: string
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type categoriesUpdateWithoutUsers_categories_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_updated_byTousers?: usersUpdateOneWithoutCategories_categories_updated_byTousersNestedInput
    tasks?: tasksUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsers_categories_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: tasksUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUpdateWithoutUsers_categories_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    tasks?: tasksUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsers_categories_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTasksNestedInput
    user_tasks?: user_tasksUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    user_tasks?: user_tasksUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_tasks_created_byTousers?: usersUpdateOneRequiredWithoutTasks_tasks_created_byTousersNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTasksNestedInput
    user_tasks?: user_tasksUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_tasks?: user_tasksUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    coin?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    categories_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsUncheckedUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsUncheckedUpdateManyWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_endpoint_accessUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
  }

  export type user_endpoint_accessUncheckedUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
  }

  export type user_endpoint_accessUncheckedUpdateManyWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    methods?: StringFieldUpdateOperationsInput | string
  }

  export type user_shop_itemsUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shop_items?: shop_itemsUpdateOneRequiredWithoutUser_shop_itemsNestedInput
  }

  export type user_shop_itemsUncheckedUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    shop_item_id?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_shop_itemsUncheckedUpdateManyWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    shop_item_id?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tasksUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge_submissions?: challenge_submissionsUpdateManyWithoutUser_tasksNestedInput
    tasks?: tasksUpdateOneRequiredWithoutUser_tasksNestedInput
  }

  export type user_tasksUncheckedUpdateWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutUser_tasksNestedInput
  }

  export type user_tasksUncheckedUpdateManyWithoutUsersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    task_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_shop_itemsCreateManyShop_itemsInput = {
    uuid?: string
    user_id: string
    purchased_at?: Date | string
  }

  export type user_shop_itemsUpdateWithoutShop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_shop_itemsNestedInput
  }

  export type user_shop_itemsUncheckedUpdateWithoutShop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_shop_itemsUncheckedUpdateManyWithoutShop_itemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    purchased_at?: DateTimeFieldUpdateOperationsInput | Date | string
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