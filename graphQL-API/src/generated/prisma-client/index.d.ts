// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  player: (where?: PlayerWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  player: (where: PlayerWhereUniqueInput) => PlayerNullablePromise;
  players: (args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Player>;
  playersConnection: (args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PlayerConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPlayer: (data: PlayerCreateInput) => PlayerPromise;
  updatePlayer: (args: {
    data: PlayerUpdateInput;
    where: PlayerWhereUniqueInput;
  }) => PlayerPromise;
  updateManyPlayers: (args: {
    data: PlayerUpdateManyMutationInput;
    where?: PlayerWhereInput;
  }) => BatchPayloadPromise;
  upsertPlayer: (args: {
    where: PlayerWhereUniqueInput;
    create: PlayerCreateInput;
    update: PlayerUpdateInput;
  }) => PlayerPromise;
  deletePlayer: (where: PlayerWhereUniqueInput) => PlayerPromise;
  deleteManyPlayers: (where?: PlayerWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  player: (
    where?: PlayerSubscriptionWhereInput
  ) => PlayerSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PlayerOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "team_ASC"
  | "team_DESC"
  | "position_ASC"
  | "position_DESC"
  | "number_ASC"
  | "number_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PlayerCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  team: String;
  position: String;
  number: Int;
}

export interface PlayerUpdateInput {
  name?: Maybe<String>;
  team?: Maybe<String>;
  position?: Maybe<String>;
  number?: Maybe<Int>;
}

export interface PlayerWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  team?: Maybe<String>;
  team_not?: Maybe<String>;
  team_in?: Maybe<String[] | String>;
  team_not_in?: Maybe<String[] | String>;
  team_lt?: Maybe<String>;
  team_lte?: Maybe<String>;
  team_gt?: Maybe<String>;
  team_gte?: Maybe<String>;
  team_contains?: Maybe<String>;
  team_not_contains?: Maybe<String>;
  team_starts_with?: Maybe<String>;
  team_not_starts_with?: Maybe<String>;
  team_ends_with?: Maybe<String>;
  team_not_ends_with?: Maybe<String>;
  position?: Maybe<String>;
  position_not?: Maybe<String>;
  position_in?: Maybe<String[] | String>;
  position_not_in?: Maybe<String[] | String>;
  position_lt?: Maybe<String>;
  position_lte?: Maybe<String>;
  position_gt?: Maybe<String>;
  position_gte?: Maybe<String>;
  position_contains?: Maybe<String>;
  position_not_contains?: Maybe<String>;
  position_starts_with?: Maybe<String>;
  position_not_starts_with?: Maybe<String>;
  position_ends_with?: Maybe<String>;
  position_not_ends_with?: Maybe<String>;
  number?: Maybe<Int>;
  number_not?: Maybe<Int>;
  number_in?: Maybe<Int[] | Int>;
  number_not_in?: Maybe<Int[] | Int>;
  number_lt?: Maybe<Int>;
  number_lte?: Maybe<Int>;
  number_gt?: Maybe<Int>;
  number_gte?: Maybe<Int>;
  AND?: Maybe<PlayerWhereInput[] | PlayerWhereInput>;
  OR?: Maybe<PlayerWhereInput[] | PlayerWhereInput>;
  NOT?: Maybe<PlayerWhereInput[] | PlayerWhereInput>;
}

export interface PlayerUpdateManyMutationInput {
  name?: Maybe<String>;
  team?: Maybe<String>;
  position?: Maybe<String>;
  number?: Maybe<Int>;
}

export interface PlayerSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PlayerWhereInput>;
  AND?: Maybe<PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput>;
  OR?: Maybe<PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput>;
  NOT?: Maybe<PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput>;
}

export type PlayerWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePlayer {
  count: Int;
}

export interface AggregatePlayerPromise
  extends Promise<AggregatePlayer>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlayerSubscription
  extends Promise<AsyncIterator<AggregatePlayer>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PlayerPreviousValues {
  id: ID_Output;
  name: String;
  team: String;
  position: String;
  number: Int;
}

export interface PlayerPreviousValuesPromise
  extends Promise<PlayerPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  team: () => Promise<String>;
  position: () => Promise<String>;
  number: () => Promise<Int>;
}

export interface PlayerPreviousValuesSubscription
  extends Promise<AsyncIterator<PlayerPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  team: () => Promise<AsyncIterator<String>>;
  position: () => Promise<AsyncIterator<String>>;
  number: () => Promise<AsyncIterator<Int>>;
}

export interface PlayerEdge {
  node: Player;
  cursor: String;
}

export interface PlayerEdgePromise extends Promise<PlayerEdge>, Fragmentable {
  node: <T = PlayerPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlayerEdgeSubscription
  extends Promise<AsyncIterator<PlayerEdge>>,
    Fragmentable {
  node: <T = PlayerSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PlayerSubscriptionPayload {
  mutation: MutationType;
  node: Player;
  updatedFields: String[];
  previousValues: PlayerPreviousValues;
}

export interface PlayerSubscriptionPayloadPromise
  extends Promise<PlayerSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlayerPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlayerPreviousValuesPromise>() => T;
}

export interface PlayerSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlayerSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlayerSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlayerPreviousValuesSubscription>() => T;
}

export interface Player {
  id: ID_Output;
  name: String;
  team: String;
  position: String;
  number: Int;
}

export interface PlayerPromise extends Promise<Player>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  team: () => Promise<String>;
  position: () => Promise<String>;
  number: () => Promise<Int>;
}

export interface PlayerSubscription
  extends Promise<AsyncIterator<Player>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  team: () => Promise<AsyncIterator<String>>;
  position: () => Promise<AsyncIterator<String>>;
  number: () => Promise<AsyncIterator<Int>>;
}

export interface PlayerNullablePromise
  extends Promise<Player | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  team: () => Promise<String>;
  position: () => Promise<String>;
  number: () => Promise<Int>;
}

export interface PlayerConnection {
  pageInfo: PageInfo;
  edges: PlayerEdge[];
}

export interface PlayerConnectionPromise
  extends Promise<PlayerConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlayerEdge>>() => T;
  aggregate: <T = AggregatePlayerPromise>() => T;
}

export interface PlayerConnectionSubscription
  extends Promise<AsyncIterator<PlayerConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlayerEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlayerSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Player",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
