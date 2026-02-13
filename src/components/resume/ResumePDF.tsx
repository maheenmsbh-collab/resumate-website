import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

export default function ResumePDF({ data }: any) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {data.experience?.map((e: any, i: number) => (
            <View key={i} style={styles.block}>
              <Text>{e.role} — {e.company}</Text>
              <Text style={styles.muted}>{e.duration}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text>{data.skills?.join(", ")}</Text>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    fontSize: 12,
    marginBottom: 12,
  },
  section: {
    marginTop: 16,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  block: {
    marginBottom: 6,
  },
  muted: {
    fontSize: 9,
    color: "#666",
  },
});
