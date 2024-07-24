import { StyleSheet } from "react-native";
import {THEMES} from '../../global/thmesGlobal';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: THEMES.colors.gray900,
    paddingTop: 75
  },
  titleEvento: {
    color: THEMES.colors.gray300,
    fontSize: THEMES.size.lg,
    fontFamily: THEMES.fonts.bold,
  },
  dateEvento: {
    color: THEMES.colors.gray500,
    fontSize: THEMES.size.xm,
    lineHeight: 16,
    marginTop: 8,
    fontFamily:THEMES.fonts.regular
  },
  formEvento: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 44,
    alignItems: "center"
  },
  inputEvento: {
    backgroundColor: THEMES.colors.gray600,
    flex: 1,
    height: 56,
    borderRadius: 4,
    padding: 8,
    color: THEMES.colors.gray300,
    fontFamily: THEMES.fonts.regular
  },
  ParticipantsTitle: {
    color: THEMES.colors.gray300,
    fontSize: THEMES.size.lg,
    fontFamily: THEMES.fonts.bold,

    marginTop: 36
  },
  containerListParticipant: {
    marginVertical: 24
  },
  listEmpty: {
    color: THEMES.colors.gray300,
    textAlign: "center",
    lineHeight: 20,
    fontSize: THEMES.size.xm,
    fontFamily:THEMES.fonts.regular
  },

})