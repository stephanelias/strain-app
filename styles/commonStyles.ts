import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from './theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.bold,
    marginBottom: spacing.xs,
    color: colors.text.primary,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
  },
});
