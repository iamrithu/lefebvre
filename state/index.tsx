import {
  UserData,
  IndirectCodeData,
  ResourceData,
  EmployeeData,
  MeasureData,
  AttendanceTypeData,
} from "@/types";
import { create } from "zustand";

var user: UserData | null = null;
export const useStore = create((set) => ({
  user: user, // Object value with initial properties
  setUser: (user: any) => set({ user }),
  removeUser: (user: any) => set({ user: null }), // Action to update user object
}));

var indirectCode: IndirectCodeData | null = null;
export const useIndirectCodeStore = create((set) => ({
  indirectCode: indirectCode, // Object value with initial properties
  setIndirect: (indirectCode: any) => set({ indirectCode }),
  removeIndirect: (usindirectCodeer: any) => set({ indirectCode: null }), // Action to update user object
}));

var resourceCode: ResourceData | null = null;
export const useResourceStore = create((set) => ({
  resourceCode: resourceCode, // Object value with initial properties
  setResource: (resourceCode: any) => set({ resourceCode }),
  removeResource: (resourceCode: any) => set({ resourceCode: null }), // Action to update user object
}));
var employee: EmployeeData | null = null;
export const useEmployeeStore = create((set) => ({
  employee: employee, // Object value with initial properties
  setEmployee: (employee: any) => set({ employee }),
  removeEmployee: (employee: any) => set({ employee: null }), // Action to update user object
}));

var measure: MeasureData | null = null;
export const useMeasureStore = create((set) => ({
  measure: measure, // Object value with initial properties
  setMeasure: (measure: any) => set({ measure }),
  removeMeasure: (empmeasureloyee: any) => set({ measure: null }), // Action to update user object
}));
var attendanceType: AttendanceTypeData | null = null;
export const useAttendanceTypeStore = create((set) => ({
  attendanceType: attendanceType, // Object value with initial properties
  setAttendanceType: (attendanceType: any) => set({ attendanceType }),
  removeAttendanceType: (attendanceType: any) => set({ attendanceType: null }), // Action to update user object
}));
