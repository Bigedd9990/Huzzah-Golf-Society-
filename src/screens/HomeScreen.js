import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { theme } from '../theme';
import {
  upcomingFixtures,
  latestResults,
  memberHighlights,
  quickActions,
} from '../data/mockData';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerCard}>
          <Image
            source={require('../../Huzzah GS.PNG')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Huzzah Golf Society</Text>
          <Text style={styles.subtitle}>Clubhouse, events and member updates</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Upcoming events</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Open rounds</Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
        </View>
        <View style={styles.quickActionsRow}>
          {quickActions.map((action) => (
            <Pressable key={action.label} style={styles.actionButton}>
              <Text style={styles.actionEmoji}>{action.emoji}</Text>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Upcoming fixtures</Text>
        </View>
        {upcomingFixtures.map((fixture) => (
          <View key={fixture.id} style={styles.listCard}>
            <Text style={styles.cardTag}>{fixture.type}</Text>
            <Text style={styles.cardTitle}>{fixture.title}</Text>
            <Text style={styles.cardMeta}>{fixture.date}</Text>
            <Text style={styles.cardMeta}>{fixture.location}</Text>
          </View>
        ))}

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Latest results</Text>
        </View>
        {latestResults.map((result) => (
          <View key={result.id} style={styles.listCard}>
            <Text style={styles.cardTag}>{result.tournament}</Text>
            <Text style={styles.cardTitle}>{result.winner}</Text>
            <Text style={styles.cardMeta}>{result.summary}</Text>
          </View>
        ))}

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Member highlights</Text>
        </View>
        {memberHighlights.map((member) => (
          <View key={member.name} style={styles.listCardRow}>
            <View style={styles.avatarBubble}>
              <Text style={styles.avatarText}>{member.initials}</Text>
            </View>
            <View style={styles.memberTextWrap}>
              <Text style={styles.cardTitle}>{member.name}</Text>
              <Text style={styles.cardMeta}>{member.role}</Text>
            </View>
          </View>
        ))}

        <View style={styles.futurePanel}>
          <Text style={styles.futureTitle}>Built for growth</Text>
          <Text style={styles.futureText}>
            This starter keeps the app flexible for future sections like news, booking,
            member directory, handicaps, photo gallery, and score tracking.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  headerCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  logo: {
    width: 220,
    height: 90,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.primaryText,
    marginTop: 4,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: theme.colors.secondaryText,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 8,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 26,
    fontWeight: '800',
    color: theme.colors.accent,
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: theme.colors.secondaryText,
    textAlign: 'center',
  },
  sectionHeaderRow: {
    marginTop: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.primaryText,
  },
  quickActionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  actionButton: {
    width: '31%',
    minWidth: 100,
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.primaryText,
    textAlign: 'center',
  },
  listCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  cardTag: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.7,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.primaryText,
  },
  cardMeta: {
    marginTop: 4,
    fontSize: 13,
    color: theme.colors.secondaryText,
  },
  listCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  avatarBubble: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: theme.colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontWeight: '800',
    color: theme.colors.accent,
  },
  memberTextWrap: {
    flex: 1,
  },
  futurePanel: {
    marginTop: 18,
    backgroundColor: theme.colors.accentSoft,
    borderRadius: 18,
    padding: 18,
  },
  futureTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.primaryText,
    marginBottom: 6,
  },
  futureText: {
    color: theme.colors.primaryText,
    lineHeight: 20,
  },
});
