import { Icons } from '@/components/icons'
import { Pages } from '@/router/pages'
import { Layouts } from '@/router/layouts'

export interface IPagination {
  totalCount: number
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}
export interface IResultPaginationData<T> {
  data: T[]
  pagination: IPagination
}

export interface IResultPagination<T> {
  list: T[]
  pagination: IPagination
}

export interface PaginationParams {
  offset?: number
  limit?: number
}

interface BaseItem {
  id: string
  createAt: string
  updateAt: string
}

export interface NavItem {
  title: string
  href: string
  icon?: keyof typeof Icons
  component: keyof typeof Pages
  layout?: keyof typeof Layouts
  description?: string
  hideInMenu?: boolean
  children?: NavItem[]
  disabled?: boolean
}

export interface ProjectItem extends BaseItem {
  title: string
  description: string
  link: string
}

export interface TaskItem extends BaseItem {
  title: string
  description: string
  priority: 0 | 1 | 2 | 3
  projectId: string
  link: string
  status: 'todo' | 'in-progress' | 'done'
}

export interface Tutorial {
  level: string
  time: string
  categories: string[]
}

export interface YoubetExtra {
  tags?: string[]
}

export interface Project {
  _id: number
  githubId: number
  name: string
  htmlUrl: string
  description: string | null
  createdAt: string
  updatedAt: string
  stargazersCount: number
  forksCount: number
  openIssuesCount: number
  language: string | null
  owner: User
  tutorial?: Tutorial
  youbetExtra?: YoubetExtra
}

export interface User {
  login: string
  htmlUrl: string
  avatarUrl: string
}

export interface FetchIssuesParams {
  org?: string
  project?: string
  offset?: number
  limit?: number
}
export interface FetchPullRequestParams extends PaginationParams {
  state?: string
  search?: string
}

export interface PullRequest {
  _id: string
  githubId: number
  title: string
  body: string
  state: string
  createdAt: string
  updatedAt: string
  closedAt: string | null
  mergedAt: string | null
  htmlUrl: string
  project: string
  user: {
    login: string
    htmlUrl: string
    avatarUrl: string
  }
  assignees: {
    login: string
    htmlUrl: string
    avatarUrl: string
  }[]
  labels: string[]
  namespace: string
}

export interface FetchTaskAppliesParams extends PaginationParams {
  search?: string
}

export interface PopulatedTaskApply extends Omit<TaskApply, 'task' | 'user'> {
  task: Task
  user: User
}

export interface TaskApply {
  _id: string
  githubId: string
  project: string
  task: string
  user: {
    login: string
  }
  comment?: string
  htmlUrl?: string
  createdAt: Date
  updatedAt: Date
  canceledAt?: Date
}

export interface Task {
  htmlUrl: string
  githubId: string
  title: string
  assignee?: User
  state: string
  labels: string[]
  labelsWithColors?: { name: string; color: string }[]
  createdAt: string
  updatedAt: string
  body: string
  assignees: User[]
  _id: string
  user?: User
}

export interface Profile {
  username: string
  email?: string
  avatarUrl: string
  displayName?: string
  location?: string
  bio?: string
  followers?: number
  following?: number
  twitterUsername?: string
  completedTasks?: number
}

export interface Chapter {
  title: string
  path: string
  children: Chapter[] | null
  level: number
}

export interface GithubOrganization {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: string
}

export interface GithubRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  owner: User
  html_url: string
  description: string
  created_at: string
}
