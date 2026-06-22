export interface reservation {
  id: string;
  user_id: string;
  start_date: Date;
  end_date: Date;
  location_id: string;
  room_number?: string;
}
