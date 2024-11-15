export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      adk_available_systems: {
        Row: {
          id: number
          image_url: string | null
          is_active: boolean
          name: string
          short_description: string
          slug: string
        }
        Insert: {
          id?: number
          image_url?: string | null
          is_active?: boolean
          name: string
          short_description: string
          slug: string
        }
        Update: {
          id?: number
          image_url?: string | null
          is_active?: boolean
          name?: string
          short_description?: string
          slug?: string
        }
        Relationships: []
      }
      adk_tags: {
        Row: {
          description: string
          id: number
          name: string
          slug: string
        }
        Insert: {
          description: string
          id?: number
          name: string
          slug: string
        }
        Update: {
          description?: string
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      adk_user_profiles: {
        Row: {
          avatar_url: string
          email: string
          id: string
          name: string
          primary_system_id: number | null
          user_name: string | null
        }
        Insert: {
          avatar_url: string
          email: string
          id: string
          name: string
          primary_system_id?: number | null
          user_name?: string | null
        }
        Update: {
          avatar_url?: string
          email?: string
          id?: string
          name?: string
          primary_system_id?: number | null
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "adk_user_profiles_primary_system_id_fkey"
            columns: ["primary_system_id"]
            isOneToOne: false
            referencedRelation: "adk_available_systems"
            referencedColumns: ["id"]
          },
        ]
      }
      cod_adventures: {
        Row: {
          tags: string[] | null
          created_at: string
          dg_master_id: string
          id: number
          image_url: string | null
          is_active: boolean
          long_description: string | null
          looking_for_players: boolean
          max_players: number
          name: string
          session_duration: number
          short_description: string
          slug: string
        }
        Insert: {
          tags?: string[] | null
          created_at?: string
          dg_master_id: string
          id?: number
          image_url?: string | null
          is_active?: boolean
          long_description?: string | null
          looking_for_players?: boolean
          max_players?: number
          name: string
          session_duration?: number
          short_description: string
          slug?: string
        }
        Update: {
          tags?: string[] | null
          created_at?: string
          dg_master_id?: string
          id?: number
          image_url?: string | null
          is_active?: boolean
          long_description?: string | null
          looking_for_players?: boolean
          max_players?: number
          name?: string
          session_duration?: number
          short_description?: string
          slug?: string
        }
        Relationships: []
      }
      cod_conditions: {
        Row: {
          description: string
          id: number
          name: string
          persistent: boolean
          resolution: string
          slug: string
        }
        Insert: {
          description: string
          id?: number
          name: string
          persistent?: boolean
          resolution: string
          slug: string
        }
        Update: {
          description?: string
          id?: number
          name?: string
          persistent?: boolean
          resolution?: string
          slug?: string
        }
        Relationships: []
      }
      cod_merits: {
        Row: {
          effect: string
          extra_info: string | null
          id: number
          level: number
          name: string
          prerequisites: string | null
          slug: string
          uniqueness_id: string | null
        }
        Insert: {
          effect: string
          extra_info?: string | null
          id?: number
          level?: number
          name: string
          prerequisites?: string | null
          slug: string
          uniqueness_id?: string | null
        }
        Update: {
          effect?: string
          extra_info?: string | null
          id?: number
          level?: number
          name?: string
          prerequisites?: string | null
          slug?: string
          uniqueness_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

