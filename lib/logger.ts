'use client';

interface LogEntry {
  type: 'ERROR' | 'WARN';
  timestamp: string;
  context?: string;
  message: string;
  stack?: string;
}

class Logger {
  private readonly STORAGE_KEY = 'app_error_logs';
  private readonly MAX_LOGS = 1000;

  // 记录错误日志
  error(error: Error | string, context?: string) {
    const timestamp = new Date().toISOString();
    const errorMessage = error instanceof Error ? error.message : error;
    const stack = error instanceof Error ? error.stack : '';
    
    const logEntry: LogEntry = {
      type: 'ERROR',
      timestamp,
      context,
      message: errorMessage,
      stack
    };

    this.saveLog(logEntry);
    
    // 开发环境下同时输出到控制台
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${timestamp}] ERROR${context ? ` [${context}]` : ''}: ${errorMessage}`);
      if (stack) console.error('Stack:', stack);
    }
  }

  // 记录警告日志
  warn(message: string, context?: string) {
    const timestamp = new Date().toISOString();
    
    const logEntry: LogEntry = {
      type: 'WARN',
      timestamp,
      context,
      message
    };

    this.saveLog(logEntry);
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[${timestamp}] WARN${context ? ` [${context}]` : ''}: ${message}`);
    }
  }

  // 获取最近的日志
  getRecentLogs(count: number = 50): LogEntry[] {
    try {
      const logs = this.getLogs();
      return logs.slice(-count);
    } catch (error) {
      console.error('Error reading logs:', error);
      return [];
    }
  }

  // 清除所有日志
  clearLogs() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  private saveLog(logEntry: LogEntry) {
    if (typeof window === 'undefined') return;

    const logs = this.getLogs();
    logs.push(logEntry);

    // 保持日志数量在限制之内
    if (logs.length > this.MAX_LOGS) {
      logs.shift(); // 移除最旧的日志
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
  }

  private getLogs(): LogEntry[] {
    if (typeof window === 'undefined') return [];

    const logsStr = localStorage.getItem(this.STORAGE_KEY);
    return logsStr ? JSON.parse(logsStr) : [];
  }
}

export const logger = new Logger(); 