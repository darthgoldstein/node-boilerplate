import { config } from 'dotenv';
config();

export default class ConfigUtils {
  private static throwMissingEnvVarError(key: string) {
    throw new Error(`Environment variable "${key}" has no defined value.`);
  }

  static string(key: string, defaultValue?: string): string {
    if (process.env[key] === undefined && defaultValue === undefined) {
      this.throwMissingEnvVarError(key);
    } else if (process.env[key] === undefined) {
      return String(defaultValue);
    } else {
      return String(process.env[key]);
    }
  }

  static boolean(key: string, defaultValue?: boolean): boolean {
    if (process.env[key] === undefined && defaultValue === undefined) {
      this.throwMissingEnvVarError(key);
    } else if (process.env[key] === undefined) {
      return Boolean(defaultValue);
    } else {
      return Boolean(process.env[key]);
    }
  }

  static number(key: string, defaultValue?: number): number {
    if (process.env[key] === undefined && defaultValue === undefined) {
      this.throwMissingEnvVarError(key);
    } else if (process.env[key] === undefined) {
      return Number(defaultValue);
    } else {
      return Number(process.env[key]);
    }
  }
}