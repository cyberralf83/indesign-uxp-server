/**
 * Utility tool definitions for InDesign MCP Server
 * Utility functions and custom execution capabilities
 */

export const utilityToolDefinitions = [
    // =================== UTILITY TOOLS ===================
    // Local hardening: execute_indesign_code removed (arbitrary code with a self-answerable confirmation).
    {
        name: 'view_document',
        description: 'View document information and current state',
        inputSchema: { type: 'object', properties: {} },
    },
    {
        name: 'get_session_info',
        description: 'Get current session information including page dimensions and active document',
        inputSchema: { type: 'object', properties: {} },
    },
    {
        name: 'clear_session',
        description: 'Clear all session data including page dimensions and document information',
        inputSchema: { type: 'object', properties: {} },
    },
]; 