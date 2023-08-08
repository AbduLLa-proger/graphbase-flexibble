import { User, Session } from "next-auth";

export type FormState = {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly liveSiteUrl: string;
  readonly githubUrl: string;
  readonly category: string;
};

export interface ProjectInterface {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly githubUrl: string;
  readonly category: string;
  readonly id: string;
  readonly createdBy: {
    readonly name: string;
    readonly email: string;
    readonly avatarUrl: string;
    readonly id: string;
  };
}

export interface UserProfile {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly description: string | null;
  readonly avatarUrl: string;
  readonly githubUrl: string | null;
  readonly linkedinUrl: string | null;
  readonly projects: {
    readonly edges: { readonlynode: ProjectInterface }[];
    readonly pageInfo: {
      readonly hasPreviousPage: boolean;
      readonly hasNextPage: boolean;
      readonly startCursor: string;
      readonly endCursor: string;
    };
  };
}

export interface SessionInterface extends Session {
  readonly user: User & {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly avatarUrl: string;
  };
}

export interface ProjectForm {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly liveSiteUrl: string;
  readonly githubUrl: string;
  readonly category: string;
}
