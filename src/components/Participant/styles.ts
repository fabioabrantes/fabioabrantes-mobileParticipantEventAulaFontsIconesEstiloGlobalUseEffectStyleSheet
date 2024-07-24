import { StyleSheet } from "react-native";
import { THEMES } from '../../global/thmesGlobal';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  nameParticipant: {
    fontSize: THEMES.size.xm,
    color: THEMES.colors.gray300,
    fontFamily: THEMES.fonts.bold,
    marginLeft: 16,
    textAlign: 'center'
  },
  ModalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "rgba(20, 20, 20, 0.8)"
  },
  ModalWrapper: {
    backgroundColor: THEMES.colors.white,
    padding: 24,
    borderRadius: 8,
    alignItems: "center"
  },
  ModalTitle: {
    textAlign: "center",
    color: THEMES.colors.gray900,
    fontSize: THEMES.size.sm,
    fontFamily: THEMES.fonts.bold,
  },
  ModalSubTitle: {
    textAlign: "center",
    color: THEMES.colors.gray600,
    fontSize: THEMES.size.xm,
    fontFamily: THEMES.fonts.regular,
  },
  ModalButtonInteraction: {
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
    width: "100%"
  }
})